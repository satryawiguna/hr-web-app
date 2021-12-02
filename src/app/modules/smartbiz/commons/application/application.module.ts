import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ApplicationComponent, EditApplicationComponent, AddApplicationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    ApplicationRoutingModule,
    SharedModulesModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    FlexLayoutModule
  ]
})
export class ApplicationModule { }
