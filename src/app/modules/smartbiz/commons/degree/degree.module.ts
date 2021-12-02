import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from './../../../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DegreeRoutingModule } from './degree-routing.module';
import { DegreeComponent } from './degree.component';
import { AddDegreeComponent } from './add-degree/add-degree.component';
import { EditDegreeComponent } from './edit-degree/edit-degree.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DegreeComponent, AddDegreeComponent, EditDegreeComponent],
  imports: [
    CommonModule,
    DegreeRoutingModule,
    SharedModulesModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatCardModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatProgressBarModule,
    // FlexLayoutModule
  ]
})
export class DegreeModule { }
