import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyCategoryComponent } from './company-category.component';
import { AuthGuard } from '../../../../_guards/auth.guard';
import { RoleGuard } from '@_guards/role.guard';

const routes: Routes = [
  {
    path: 'list',
    component: CompanyCategoryComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'company-category',
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
export class CompanyCategoryRoutingModule { }
