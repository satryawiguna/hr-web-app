import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LogoutComponent } from './modules/auth/logout/logout.component';
import { RoleGuard } from './_guards/role.guard';
import { AuthGuard } from './_guards/auth.guard';
import { LogoutComponent } from './modules/auth/logout/logout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./modules/auth/auth.module').then(a => a.AuthModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: './modules/layouts/layouts.module#LayoutsModule'
  // },
  // {
  //   path: 'logout',
  //   component: LogoutComponent,
  //   canActivate: [
  //     AuthGuard, RoleGuard
  //   ],
  //   data: {
  //     role: ['*']
  //   }
  // },
  // {
  //   path: 'error',
  //   loadChildren: './modules/error/error.module#ErrorModule'
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'smartbiz'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
