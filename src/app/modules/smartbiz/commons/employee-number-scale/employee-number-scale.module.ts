import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeNumberScaleRoutingModule } from './employee-number-scale-routing.module';
import { EmployeeNumberScaleComponent } from './employee-number-scale.component';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddEmployeeNumberScaleComponent } from './add-employee-number-scale/add-employee-number-scale.component';
import { EditEmployeeNumberScaleComponent } from './edit-employee-number-scale/edit-employee-number-scale.component';


@NgModule({
  declarations: [EmployeeNumberScaleComponent, AddEmployeeNumberScaleComponent, EditEmployeeNumberScaleComponent],
  imports: [
    CommonModule,
    EmployeeNumberScaleRoutingModule,
    SharedModulesModule
  ]
})
export class EmployeeNumberScaleModule { }
