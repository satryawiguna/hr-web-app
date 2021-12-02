import { RoleGuard } from './../../../../_guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';


const routes: Routes = [
  {
    path: 'list',
    component: ApplicationComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'application',
      role: ['super-admin']
    }
  },
  // {
  //   path: 'add',
  //   component: AddBankComponent,
  //   canActivate: [
  //     AuthGuard,
  //     //  RoleGuard
  //   ],
  //   data: {
  //     breadcrumbs: true,
  //     text: 'Add',
  //     role: ['super-admin']
  //   }
  // },
  // {
  //   path: 'edit/:id',
  //   component: EditComponent,
  //   canActivate: [
  //     AuthGuard, RoleGuard
  //   ],
  //   data: {
  //     breadcrumbs: true,
  //     text: 'Edit',
  //     role: ['super-admin']
  //   }
  // },
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
export class ApplicationRoutingModule { }
