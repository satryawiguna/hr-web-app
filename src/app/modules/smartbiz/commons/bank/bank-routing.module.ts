import { RoleGuard } from './../../../../_guards/role.guard';
import { AddBankComponent } from './add-bank/add-bank.component';
import { EditBankComponent } from './edit-bank/edit-bank.component';
import { BankComponent } from './bank.component';
import { AuthGuard } from './../../../../_guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'list',
    component: BankComponent,
    canActivate: [
      AuthGuard,
      RoleGuard,
    ],
    data: {
      breadcrumbs: true,
      text: 'List',
      componentName: 'bank',
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
export class BankRoutingModule { }
