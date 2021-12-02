import { finalize, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth/auth.service';
import AutoUnsubscribe from 'src/app/shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent extends AutoUnsubscribe implements OnInit {

    isErrorValidation = false;
    isSubmitted = false;
    forgetPasswordForm = this.fb.group({
        identity: ['', Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private _service: AuthService
    ) {
        super();
    }

    ngOnInit() { }

    handleErrors() {
        Object.keys(this.forgetPasswordForm.controls).forEach(key => {

            const controlErrors: ValidationErrors = this.forgetPasswordForm.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                });
            }
        });
    }

    onSubmit() {
        this.isErrorValidation = false;
        this.isSubmitted = true;

        this.subs.sink = this._service.sendResetLinkEmail(this.forgetPasswordForm.value)
            .pipe(
                finalize(() => this.isSubmitted = false),
                tap(
                    // TODO::navigate to reset password page
                    console.log,
                    err => {
                        if (err.status === 401) {
                            this.isErrorValidation = true;
                        }
                    }
                )
            )
            .subscribe();
    }

}
