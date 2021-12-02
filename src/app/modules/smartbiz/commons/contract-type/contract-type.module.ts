import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractTypeRoutingModule } from './contract-type-routing.module';
import { ContractTypeComponent } from './contract-type.component';
import { AddContractTypeComponent } from './add-contract-type/add-contract-type.component';
import { EditContractTypeComponent } from './edit-contract-type/edit-contract-type.component';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';

@NgModule({
  declarations: [ContractTypeComponent, AddContractTypeComponent, EditContractTypeComponent],
  imports: [
    CommonModule,
    ContractTypeRoutingModule,
    SharedModulesModule
  ]
})
export class ContractTypeModule { }
