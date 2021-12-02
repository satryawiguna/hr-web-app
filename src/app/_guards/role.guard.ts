import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '@_state';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  public model: any;

  constructor(private _router: Router, private store: Store, private toastr: ToastrService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const { componentName } = next.data;
    return this.store.select(AuthState.permissions).pipe(
      map(v => v.hasOwnProperty('manage-' + componentName) && v['manage-' + componentName].value !== 'DENY'),
      tap(v => {
        if (!v) {
          this.toastr.error(`You don\'t have authority to open ${componentName.split('-').join(' ')} module`);
          return this._router.navigate(['human-resource']);
        }
      }),
    );
  }
}
