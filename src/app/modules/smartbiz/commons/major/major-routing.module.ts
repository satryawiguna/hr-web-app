import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorComponent } from './major.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { RoleGuard } from '@_guards/role.guard';


const routes: Routes = [
  {
    path: 'list',
    component: MajorComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'major',
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
export class MajorRoutingModule { }
