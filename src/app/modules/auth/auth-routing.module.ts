import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';

import { LoggedGuard } from '../../_guards/logged.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      LoggedGuard
    ]
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
