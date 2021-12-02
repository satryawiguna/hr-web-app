import { RoleGuard } from '@_guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumbs: true,
      text: 'Employee'
    },
    children: [
      {
        path: 'list',
        component: EmployeeComponent,
        canActivate: [
          AuthGuard,
          RoleGuard
        ],
        data: {
          breadcrumbs: true,
          componentName: 'employee',
          text: 'List',
          role: ['super-admin']
        }
      },
      {
        path: 'child',
        loadChildren: () => import('./child/child.module').then(m => m.ChildModule),
      },
      {
        path: 'formal-education-history',
        loadChildren: () => import('./formal-education-history/formal-education-history.module').then(m => m.FormalEducationHistoryModule),
      },
      {
        path: 'non-formal-education-history',
        loadChildren: () => import('./non-formal-education-history/non-formal-education-history.module').then(m => m.NonFormalEducationHistoryModule),
      },
      {
        path: 'organization-history',
        loadChildren: () => import('./organization-history/organization-history.module').then(m => m.OrganizationHistoryModule),
      },
      {
        path: 'other-equipment',
        loadChildren: () => import('./other-equipment/other-equipment.module').then(m => m.OtherEquipmentModule),
      },
      {
        path: 'work-competence',
        loadChildren: () => import('./work-competence/work-competence.module').then(m => m.WorkCompetenceModule),
      },
      {
        path: 'work-experience',
        loadChildren: () => import('./work-experience/work-experience.module').then(m => m.WorkExperienceModule),
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
export class EmployeeRoutingModule { }
