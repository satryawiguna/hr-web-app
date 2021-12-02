import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '@_guards/role.guard';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { OrganizationHistoryComponent } from './organization-history.component';


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
        component: OrganizationHistoryComponent,
        canActivate: [
          AuthGuard,
          RoleGuard,

        ],
        data: {
          breadcrumbs: true,
          componentName: 'organization-history',
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
export class OrganizationHistoryRoutingModule { }
