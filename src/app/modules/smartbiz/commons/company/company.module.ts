import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';

import { CompanyRoutingModule } from './company-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from './../../../../shared-modules/shared-modules.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CompanyComponent, AddCompanyComponent, EditCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModulesModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDialogModule
  ]
})
export class CompanyModule { }
