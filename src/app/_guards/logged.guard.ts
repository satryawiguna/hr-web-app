import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';

@Injectable()
export class LoggedGuard implements CanActivate {
  returnUrl: string;
  model: any;

  constructor(
    private store: Store,
    private _router: Router,
    private _authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = this.store.selectSnapshot(state => state.authState.token);
    if (!token) {
      return true;
    }

    if (this._authService.checkJWT(token)) {
      this.returnUrl = next.queryParams.returnUrl || 'smartbiz';
      this._router.navigate([this.returnUrl]);
      return false;
    }

    return true;
  }
}
