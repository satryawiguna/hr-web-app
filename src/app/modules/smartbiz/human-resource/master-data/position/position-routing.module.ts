import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { PositionComponent } from './position.component';
import { RoleGuard } from '@_guards/role.guard';


const routes: Routes = [
  {
    path: 'list',
    component: PositionComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'position',
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
export class PositionRoutingModule { }
