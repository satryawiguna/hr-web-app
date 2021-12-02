import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { RefreshToken } from '@_state';
import { ToastrService } from 'ngx-toastr';
import { of, timer } from 'rxjs';
import { catchError, filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import AutoUnsubscribe from 'src/app/shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';
import { DialogComponent } from 'src/app/shared-modules/components/dialog/dialog.component';
import { AuthService } from 'src/app/_services/auth/auth.service';
@Component({
  selector: 'app-session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent extends AutoUnsubscribe implements OnInit {

  loading = false;

  constructor(
    private store: Store,
    private router: Router,
    public authService: AuthService,
    public dialog: MatDialog,
    public toastr: ToastrService) { super(); }

  ngOnInit(): void {
    this.initTimer();
  }

  initTimer() {
    this.authService.setSession();

    // debug only purpose
    // const checkJWTInterval = 1000;

    const checkJWTInterval = 60 * 1000;
    this.subs.sink = timer(0, checkJWTInterval).pipe(
      map(() => this.authService.getSession()),
      map((sessionData: any) => {

        // check if session is expired more than day
        // 1 * 24 * 60 * 60 * 1000
        if ((Date.now() + sessionData.i) - sessionData.e > .9 * 24 * 60 * 60 * 1000) {
          throw new Error('Logged Out');
        }

        // check if now + inteval > JWT expired
        // e for expired time from server time
        // i for interval time between server iat & client init time
        if ((Date.now() + sessionData.i) > sessionData.e) {
          return 'Session expired';
        }

        // check if time was change by user
        // l for last checked client time
        if (Date.now() < sessionData.l) {
          return 'Computer time was changed';
        }

        // debug only purpose
        // const expiredIn = sessionData.e - (Date.now() + sessionData.i);
        // console.log(
        //   `session expired in ${
        //   // seconds
        //   Math.floor(expiredIn / 1000)
        //   }`
        // );

        // if Session still valid
        this.authService.setSession();
        return '';
      }),
      filter(message => message.length > 0),
      take(1),
      map(message => {

        // ask user if want to extend session or logout
        const dialog = this.dialog.open(DialogComponent,
          {
            width: '500px',
            data: {
              title: `${message}`,
              body: `Do you want to extend your session?`,
              btnYes: `Yes`,
              btnNo: `Logout`
            },
          });

        return dialog;
      }),
      switchMap(dialog => {

        // after close event handler
        const afterDialogClose$ = dialog.afterClosed().pipe(
          tap(() => this.loading = true),
          map(isRefresh => {
            if (isRefresh) {

              // true
              // user want to extends its session by refresh token
              const refreshToken = this.store.selectSnapshot(state => state.authState.token.refresh_token);
              if (!refreshToken) {
                throw new Error('Logged Out');
              }
              return refreshToken;
            } else {

              // false
              // user want to logout
              // jump to error
              throw new Error('Logged Out');
            }
          }),
          switchMap(token => this.authService.tokenRefresh(token)),
          tap((res: any) => {
            if (res.status === 200) {
              this.store.dispatch(new RefreshToken(res.data.token));
              // localStorage.removeItem('token');
              // localStorage.setItem('token', JSON.stringify(res.data.token));
              this.authService.deleteSession();
              this.toastr.success('token refresh success');
              this.authService.triggerChange('token refresh success');
              this.initTimer();
            }
          }),
        );
        // return event handler to switchMap
        return afterDialogClose$;
      }),
      take(1),
      catchError(err => {
        this.toastr.error('Please re login', err.message);
        this.authService.logout();
        this.dialog.closeAll();
        this.router.navigate(['login']);
        return of(false);
      }),
      finalize(() => this.loading = false),
    ).subscribe();
  }
}
