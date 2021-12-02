import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkAreaRoutingModule } from './work-area-routing.module';
import { WorkAreaComponent } from './work-area.component';
import { AddWorkAreaComponent } from './add-work-area/add-work-area.component';
import { EditWorkAreaComponent } from './edit-work-area/edit-work-area.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
    declarations: [WorkAreaComponent, AddWorkAreaComponent, EditWorkAreaComponent],
    imports: [
        CommonModule,
        SharedModulesModule,
        WorkAreaRoutingModule
    ]
})
export class WorkAreaModule { }
