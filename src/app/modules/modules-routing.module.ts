import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ModulesComponent } from './modules.component';
import { SmartbizComponent } from './smartbiz/smartbiz.component';


const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'smartbiz',
        component: SmartbizComponent,
        canActivate: [
          AuthGuard,
          // RoleGuard
        ],
        data: {
          role: ['*']
        }
      },

      // Common
      {
        path: 'common/application',
        loadChildren: () => import('./smartbiz/commons/application/application.module').then(m => m.ApplicationModule),
      },
      {
        path: 'common/bank',
        loadChildren: () => import('./smartbiz/commons/bank/bank.module').then(m => m.BankModule),
      },
      {
        path: 'common/company',
        loadChildren: () => import('./smartbiz/commons/company/company.module').then(m => m.CompanyModule),
      },
      {
        path: 'common/company-category',
        loadChildren: () => import('./smartbiz/commons/company-category/company-category.module').then(m => m.CompanyCategoryModule),
      },
      {
        path: 'common/contract-type',
        loadChildren: () => import('./smartbiz/commons/contract-type/contract-type.module').then(m => m.ContractTypeModule),
      },
      {
        path: 'common/degree',
        loadChildren: () => import('./smartbiz/commons/degree/degree.module').then(m => m.DegreeModule),
      },
      {
        path: 'common/employee-number-scale',
        loadChildren: () => import('./smartbiz/commons/employee-number-scale/employee-number-scale.module')
          .then(m => m.EmployeeNumberScaleModule),
      },
      {
        path: 'common/gender',
        loadChildren: () => import('./smartbiz/commons/gender/gender.module').then(m => m.GenderModule),
      },
      {
        path: 'common/major',
        loadChildren: () => import('./smartbiz/commons/major/major.module').then(m => m.MajorModule),
      },
      {
        path: 'common/marital-status',
        loadChildren: () => import('./smartbiz/commons/marital-status/marital-status.module').then(m => m.MaritalStatusModule),
      },
      {
        path: 'common/module',
        loadChildren: () => import('./smartbiz/commons/module/module.module').then(m => m.ModuleModule),
      },
      {
        path: 'common/religion',
        loadChildren: () => import('./smartbiz/commons/religion/religion.module').then(m => m.ReligionModule),
      },
      {
        path: 'common/group',
        loadChildren: () => import('./smartbiz/commons/group/group.module').then(m => m.GroupModule),
      },
      {
        path: 'common/access',
        loadChildren: () => import('./smartbiz/commons/access/access.module').then(m => m.AccessModule),
      },
      {
        path: 'common/permission',
        loadChildren: () => import('./smartbiz/commons/permission/permission.module').then(m => m.PermissionModule),
      },
      {
        path: 'common/role',
        loadChildren: () => import('./smartbiz/commons/role/role.module').then(m => m.RoleModule),
      },


      // Human Resource
      {
        path: 'human-resource/dashboard',
        loadChildren: () => import('./smartbiz/human-resource/dashboard/dashboard.module').then(m => m.DashboardModule),
      },

      // Master Data
      {
        path: 'human-resource/master-data/competence',
        loadChildren: () => import('./smartbiz/human-resource/master-data/competence/competence.module').then(m => m.CompetenceModule),
      },
      {
        path: 'human-resource/master-data/letter-type',
        loadChildren: () => import('./smartbiz/human-resource/master-data/letter-type/letter-type.module').then(m => m.LetterTypeModule),
      },
      {
        path: 'human-resource/master-data/position',
        loadChildren: () => import('./smartbiz/human-resource/master-data/position/position.module').then(m => m.PositionModule),
      },
      {
        path: 'human-resource/master-data/work-area',
        loadChildren: () => import('./smartbiz/human-resource/master-data/work-area/work-area.module').then(m => m.WorkAreaModule),
      },
      {
        path: 'human-resource/master-data/work-unit',
        loadChildren: () => import('./smartbiz/human-resource/master-data/work-unit/work-unit.module').then(m => m.WorkUnitModule),
      },
      {
        path: 'human-resource/master-data/office',
        loadChildren: () => import('./smartbiz/human-resource/master-data/office/office.module').then(m => m.OfficeModule),
      },
      {
        path: 'human-resource/master-data/grade',
        loadChildren: () => import('./smartbiz/human-resource/master-data/grade/grade.module').then(m => m.GradeModule),
      },

      // Personal
      {
        path: 'human-resource/personal/employee',
        loadChildren: () => import('./smartbiz/human-resource/personal/employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'human-resource/personal/position-mutation',
        loadChildren: () => import('./smartbiz/human-resource/personal/position-mutation/position-mutation.module').then(m => m.PositionMutationModule),
      },
      {
        path: 'human-resource/personal/project-mutation',
        loadChildren: () => import('./smartbiz/human-resource/personal/project-mutation/project-mutation.module').then(m => m.ProjectMutationModule),
      },
      // {
      //     path: 'human-resource/personal/registration-letter',
      //     loadChildren: './smartbiz/human-resource/personal/registration-letter/registration-letter.module#RegistrationLetterModule',
      // },
      // {
      //     path: 'human-resource/personal/termination',
      //     loadChildren: './smartbiz/human-resource/personal/termination/termination.module#TerminationModule',
      // },
      // {
      //     path: 'human-resource/personal/work-agreement-letter',
      //     loadChildren: './smartbiz/human-resource/personal/work-agreement-letter/work-agreement-letter.module#WorkAgreementLetterModule',
      // },
      {
        path: 'human-resource/personal/work-unit-mutation',
        loadChildren: () => import('./smartbiz/human-resource/personal/work-unit-mutation/work-unit-mutation.module').then(m => m.WorkUnitMutationModule),
      },

      // // Project
      // {
      //   path: 'human-resource/project',
      //   loadChildren: './smartbiz/human-resource/project/project.module#ProjectModule',
      // },


      // // Employee Self Service
      // // Dashboard
      // {
      //   path: 'employee-self-service/dashboard',
      //   loadChildren: './smartbiz/employee-self-services/dashboard/dashboard.module#DashboardModule',
      // },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'smartbiz'
      },
      {
        path: 'human-resource',
        pathMatch: 'full',
        redirectTo: 'human-resource/dashboard'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'error/404'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthModule],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
