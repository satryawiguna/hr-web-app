import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { GenderComponent } from './gender.component';
import { AddGenderComponent } from './add-gender/add-gender.component';
import { EditGenderComponent } from './edit-gender/edit-gender.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [GenderComponent, AddGenderComponent, EditGenderComponent],
  imports: [
    CommonModule,
    GenderRoutingModule,
    SharedModulesModule
  ]
})
export class GenderModule { }
