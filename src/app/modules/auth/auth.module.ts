import { SharedModulesModule } from './../../shared-modules/shared-modules.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
// import { LogoutComponent } from './logout/logout.component';
// import { AuthGuard } from '../../_guards/auth.guard';
// import { RoleGuard } from '../../_guards/role.guard';
// import { LoggedGuard } from "../../_guards/logged.guard";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SessionTimerComponent } from './session-timer/session-timer.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    SessionTimerComponent,
    // LogoutComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModulesModule,
    FlexLayoutModule
  ],
  exports: [SessionTimerComponent],
  providers: [
  ],
  entryComponents: [
    // AlertComponent
  ]
})

export class AuthModule {
}
