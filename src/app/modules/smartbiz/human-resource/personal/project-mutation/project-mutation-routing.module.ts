import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectMutationComponent } from './project-mutation.component';
import { AuthGuard } from '@_guards/auth.guard';
import { RoleGuard } from '@_guards/role.guard';


const routes: Routes = [
  {
    path: 'list',
    component: ProjectMutationComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'project',
      role: ['super-admin']
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectMutationRoutingModule { }
