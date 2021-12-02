import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { EditModuleComponent } from './edit-module/edit-module.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [ModuleComponent, AddModuleComponent, EditModuleComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    SharedModulesModule
  ]
})
export class ModuleModule { }
