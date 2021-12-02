import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import AutoUnsubscribe from 'src/app/shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AutoUnsubscribe implements OnInit {
  errMessage = '';
  isSubmitted = false;
  loginForm = this.fb.group({
    identity: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    rememberMe: [false]
  });

  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private _service: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.returnUrl = this._activatedRoute.snapshot.queryParams.returnUrl || '';
  }

  onSubmit() {
    this.errMessage = '';
    this.isSubmitted = true;

    this.subs.sink = this._service
      .login(this.loginForm.value)
      .pipe(
        finalize(() => this.isSubmitted = false),
        tap(
          (res: any) => {
            if (res.status === 200) {
              const redirectURL = this._service.saveLoginCredential(res);
              this._router.navigate([this.returnUrl || redirectURL]);
            }
          },
          (err) => {
            if (err.status === 400 || err.status === 401 || err.status === 500) {
              this.errMessage = err.error.message;
            }
          }
        ),
      )
      .subscribe();
  }
}
