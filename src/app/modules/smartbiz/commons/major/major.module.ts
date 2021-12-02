import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajorRoutingModule } from './major-routing.module';
import { MajorComponent } from './major.component';
import { AddMajorComponent } from './add-major/add-major.component';
import { EditMajorComponent } from './edit-major/edit-major.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [MajorComponent, AddMajorComponent, EditMajorComponent],
  imports: [
    CommonModule,
    MajorRoutingModule,
    SharedModulesModule
  ]
})
export class MajorModule { }
