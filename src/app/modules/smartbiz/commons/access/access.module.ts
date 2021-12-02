import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { AddAccessComponent } from './add-access/add-access.component';
import { EditAccessComponent } from './edit-access/edit-access.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [AccessComponent, AddAccessComponent, EditAccessComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    SharedModulesModule
  ]
})
export class AccessModule { }
