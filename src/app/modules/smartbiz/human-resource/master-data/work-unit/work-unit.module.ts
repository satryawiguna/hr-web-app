import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkUnitRoutingModule } from './work-unit-routing.module';
import { WorkUnitComponent } from './work-unit.component';
import { AddWorkUnitComponent } from './add-work-unit/add-work-unit.component';
import { EditWorkUnitComponent } from './edit-work-unit/edit-work-unit.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
    declarations: [WorkUnitComponent, AddWorkUnitComponent, EditWorkUnitComponent],
    imports: [
        CommonModule,
        SharedModulesModule,
        WorkUnitRoutingModule
    ]
})
export class WorkUnitModule { }
