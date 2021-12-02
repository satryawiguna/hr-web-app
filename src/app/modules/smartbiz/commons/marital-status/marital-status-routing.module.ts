import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaritalStatusComponent } from './marital-status.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { RoleGuard } from '@_guards/role.guard';


const routes: Routes = [
  {
    path: 'list',
    component: MaritalStatusComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'marital-status',
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
export class MaritalStatusRoutingModule { }
