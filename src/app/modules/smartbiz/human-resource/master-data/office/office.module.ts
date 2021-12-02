import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { EditOfficeComponent } from './edit-office/edit-office.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [OfficeComponent, AddOfficeComponent, EditOfficeComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    SharedModulesModule
  ]
})
export class OfficeModule { }
