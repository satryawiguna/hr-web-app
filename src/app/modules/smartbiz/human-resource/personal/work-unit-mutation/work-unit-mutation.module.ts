import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkUnitMutationRoutingModule } from './work-unit-mutation-routing.module';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';
import { WorkUnitMutationComponent } from './work-unit-mutation.component';
import { HistoryWorkUnitMutationComponent } from './history-work-unit-mutation/history-work-unit-mutation.component';
import { AddWorkUnitMutationComponent } from './add-work-unit-mutation/add-work-unit-mutation.component';
import { EditWorkUnitMutationComponent } from './edit-work-unit-mutation/edit-work-unit-mutation.component';


@NgModule({
  declarations: [WorkUnitMutationComponent, HistoryWorkUnitMutationComponent, AddWorkUnitMutationComponent, EditWorkUnitMutationComponent],
  imports: [
    CommonModule,
    WorkUnitMutationRoutingModule,
    SharedModulesModule
  ]
})
export class WorkUnitMutationModule { }
