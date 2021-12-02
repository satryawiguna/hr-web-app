import { RoleGuard } from './../../../../../../_guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormalEducationHistoryComponent } from './formal-education-history.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';


const routes: Routes = [
  {
    // Sub navigation without component
    path: '',
    data: {
      breadcrumbs: true,
      text: 'Child'
    },
    children: [
      {
        path: 'list',
        component: FormalEducationHistoryComponent,
        canActivate: [
          AuthGuard,
          RoleGuard,
        ],
        data: {
          breadcrumbs: true,
          componentName: 'formal-education-history',
          text: 'List',
          role: ['super-admin', 'admin', 'manager', 'operator']
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormalEducationHistoryRoutingModule { }
