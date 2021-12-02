import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState, Login, Logout } from '@_state';
import jwt_decode from 'jwt-decode';
import { Observable, of, Subject } from 'rxjs';
import { HumanResourceNavigation } from 'src/app/app.global';
import { BaseUrl } from '../../app.global';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  changeSub = new Subject<string>();

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
  }

  public login({ identity, password }) {
    const loginRequest: any = {
      identity,
      password
    };

    return this.http.post(BaseUrl + '/login', loginRequest);
  }

  public sendResetLinkEmail({ identity }) {
    const sendResetLinkEmailRequest: any = {
      identity
    };

    return this.http.post(
      BaseUrl + '/password/send-reset-link-email',
      sendResetLinkEmailRequest);
  }

  public userApplicationDefault(id: number) {
    return this.http.get(BaseUrl + '/user/application-default/' + id);
  }

  public tokenVerify() {

    return this.http.get(BaseUrl + '/token-verify');
  }

  public tokenRefresh(refresh_token: string) {
    const tokenRefreshRequest: any = {
      refresh_token
    };

    return this.http.post(BaseUrl + '/token-refresh', tokenRefreshRequest);
  }

  public logout() {
    localStorage.removeItem('applications');
    localStorage.removeItem('groups');
    localStorage.removeItem('roles');
    localStorage.removeItem('s');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    localStorage.removeItem('navbar');

    if (this.store.selectSnapshot(AuthState.checkToken)) {
      const { id } = this.store.selectSnapshot(state => state.authState.user);
      this.store.dispatch(new Logout());
      return this.http.post(BaseUrl + '/logout', { id });
    } else {
      // * user don't have credential yet
      return of('');
    }
  }

  public checkJWT(token) {
    const now = Date.now();
    const jwt = jwt_decode(token.access_token);
    if (
      (jwt.iat * 1000) < now &&
      (jwt.exp * 1000) > now
    ) {
      return true;
    } else {
      return false;
    }
  }

  public setSession() {
    const token: any = this.store.selectSnapshot((state) => state.authState.token);
    if (!token) {
      this.logout();
      return;
    }
    const jwt = jwt_decode(token.access_token);
    const lastData = JSON.parse(localStorage.getItem('s'));
    const lastChecked = Date.now();
    const interval = lastData ? lastData.i : (jwt.iat * 1000) - lastChecked;

    // debug only purpose
    // const expired = (jwt.exp * 1000) - (59 * 60 * 1000);

    const expired = (jwt.exp * 1000) - (5 * 60 * 1000);
    const sessionTimer = JSON.stringify({ l: lastChecked, i: interval, e: expired });

    localStorage.setItem('s', sessionTimer);
  }

  public deleteSession() {
    localStorage.removeItem('s');
  }

  public getSession() {
    return JSON.parse(localStorage.getItem('s'));
  }

  watchChange(): Observable<any> {
    return this.changeSub.asObservable();
  }

  triggerChange(message: string) {
    console.log(message);
    this.changeSub.next(message);
  }

  public saveLoginCredential(res) {

    const convertToObject = (data) => {
      const object_data = {};
      data.forEach((val, idx) => {
        const key = val.slug;
        const temp = {};
        temp[key] = data[idx];
        Object.assign(object_data, temp);
      });

      return object_data;
    };

    const { user, token } = res.data;

    // convert applications to object
    const applications = convertToObject(
      res.data.user.applications.length > 0 ?
        res.data.user.applications :
        res.data.user.companies[0].applications
    );
    // convert groups to object
    const groups = convertToObject(res.data.user.groups);
    // convert roles to object
    const roles = convertToObject(res.data.user.roles);
    // convert permission to object
    for (const key of Object.keys(roles)) {
      const perm: Array<any> = roles[key].permissions;
      const permissions = convertToObject(perm);
      roles[key].permissions = permissions;
      // convert accesses of each permission to object
      for (const acc of Object.keys(permissions)) {
        const accs: Array<any> = permissions[acc].accesses;
        const accesses = convertToObject(accs);
        permissions[acc].accesses = accesses;
      }
    }

    // * dispatch to store
    this.store.dispatch(new Login({ applications, groups, roles, token, user }));

    // * save to localStorage
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('token', JSON.stringify(res.data.token));
    localStorage.setItem('applications', JSON.stringify(applications));
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('roles', JSON.stringify(roles));

    // * setting navigation bar based on roles
    const permissionsList = Object.keys(roles)
      .map(v => Object
        .keys(roles[v].permissions)
        .map(val => val.split('manage-')[1]))
      .flat(1);
    permissionsList.unshift('dashboard');

    const navWithPermissions = HumanResourceNavigation
      .filter((nav: any) =>
        permissionsList.includes(nav.slug) || nav.child?.filter(subnav => permissionsList.includes(subnav.slug)).length > 0)
      .map((nav: any) => {
        const filterChild = (n) => {
          if (n.child !== null) {
            const filteredChild = n.child.filter(subnav => permissionsList.includes(subnav.slug));
            filteredChild.length === 0 ?
              n.child = null :
              n.child = filteredChild;
          }
          return n;
        };

        filterChild(nav);

        // * filter nested nav like employee
        // nav.child?.map(childNav => filterChild(childNav));
        return nav;
      });
    localStorage.setItem('navbar', JSON.stringify(navWithPermissions));

    return res.data.user.applications.length > 0 ?

      // * group system
      res.data.user.applications[0].slug + '/dashboard' :

      // * group company
      res.data.user.companies[0].applications[0].slug + '/dashboard';
  }
}
