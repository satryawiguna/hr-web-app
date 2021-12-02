import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeComponent } from './office.component';
import { AuthGuard } from '@_guards/auth.guard';
import { RoleGuard } from '@_guards/role.guard';


const routes: Routes = [
  {
    path: 'list',
    component: OfficeComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      componentName: 'competence', // replace to office when have permission
      text: 'List',
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
export class OfficeRoutingModule { }
