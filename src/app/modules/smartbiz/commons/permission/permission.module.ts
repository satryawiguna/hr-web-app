import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [PermissionComponent, AddPermissionComponent, EditPermissionComponent],
  imports: [
    CommonModule,
    PermissionRoutingModule,
    SharedModulesModule
  ]
})
export class PermissionModule { }
