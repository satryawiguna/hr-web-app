import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherEquipmentRoutingModule } from './other-equipment-routing.module';
import { OtherEquipmentComponent } from './other-equipment.component';
import { AddOtherEquipmentComponent } from './add-other-equipment/add-other-equipment.component';
import { EditOtherEquipmentComponent } from './edit-other-equipment/edit-other-equipment.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [OtherEquipmentComponent, AddOtherEquipmentComponent, EditOtherEquipmentComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    OtherEquipmentRoutingModule
  ]
})
export class OtherEquipmentModule { }
