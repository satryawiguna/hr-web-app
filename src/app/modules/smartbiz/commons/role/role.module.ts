import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [RoleComponent, AddRoleComponent, EditRoleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModulesModule
  ]
})
export class RoleModule { }
