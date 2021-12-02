import { RoleGuard } from '@_guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { CompetenceComponent } from './competence.component';


const routes: Routes = [
  {
    path: 'list',
    component: CompetenceComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      componentName: 'competence',
      text: 'List',
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
export class CompetenceRoutingModule { }
