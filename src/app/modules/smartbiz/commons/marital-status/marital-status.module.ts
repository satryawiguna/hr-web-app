import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaritalStatusRoutingModule } from './marital-status-routing.module';
import { MaritalStatusComponent } from './marital-status.component';
import { AddMaritalStatusComponent } from './add-marital-status/add-marital-status.component';
import { EditMaritalStatusComponent } from './edit-marital-status/edit-marital-status.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [MaritalStatusComponent, AddMaritalStatusComponent, EditMaritalStatusComponent],
  imports: [
    CommonModule,
    MaritalStatusRoutingModule,
    SharedModulesModule
  ]
})
export class MaritalStatusModule { }
