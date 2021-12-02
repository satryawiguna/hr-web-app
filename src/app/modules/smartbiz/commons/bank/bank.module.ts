import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from './../../../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { EditBankComponent } from './edit-bank/edit-bank.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [BankComponent, AddBankComponent, EditBankComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    SharedModulesModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    FlexLayoutModule
  ]
})
export class BankModule { }
