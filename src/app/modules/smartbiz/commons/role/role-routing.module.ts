import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { AuthGuard } from '@_guards/auth.guard';
import { RoleGuard } from '@_guards/role.guard';


const routes: Routes = [
  {
    path: 'list',
    component: RoleComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'access',
      role: ['super-admin']
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
