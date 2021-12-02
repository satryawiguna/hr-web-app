import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../_services/auth/auth.service';
import { AuthState } from './../_state/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private _router: Router,
    private _authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.store.select(AuthState.checkToken).pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this._authService.logout();
          return this._router.navigate(['login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
        }
      })
    );
  }
}
