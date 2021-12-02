import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
// import { AuthGuard } from '../../../../_guards/auth.guard';
// import { RoleGuard } from '../../../../_guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [
      // AuthGuard,
      // RoleGuard
    ],
    data: {
      breadcrumbs: true,
      text: 'Dashboard',
      role: ['*']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule {
}
