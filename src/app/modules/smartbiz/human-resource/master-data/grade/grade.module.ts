import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeComponent } from './grade.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { EditGradeComponent } from './edit-grade/edit-grade.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [GradeComponent, AddGradeComponent, EditGradeComponent],
  imports: [
    CommonModule,
    GradeRoutingModule,
    SharedModulesModule
  ]
})
export class GradeModule { }
