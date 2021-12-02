import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReligionRoutingModule } from './religion-routing.module';
import { ReligionComponent } from './religion.component';
import { AddReligionComponent } from './add-religion/add-religion.component';
import { EditReligionComponent } from './edit-religion/edit-religion.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [ReligionComponent, AddReligionComponent, EditReligionComponent],
  imports: [
    CommonModule,
    ReligionRoutingModule,
    SharedModulesModule
  ]
})
export class ReligionModule { }
