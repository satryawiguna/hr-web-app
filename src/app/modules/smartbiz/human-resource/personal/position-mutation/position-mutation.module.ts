import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';
import { AddPositionMutationComponent } from './add-position-mutation/add-position-mutation.component';
import { EditPositionMutationComponent } from './edit-position-mutation/edit-position-mutation.component';
import { PositionMutationRoutingModule } from './position-mutation-routing.module';
import { PositionMutationComponent } from './position-mutation.component';
import { HistoryPositionMutationComponent } from './history-position-mutation/history-position-mutation.component';

@NgModule({
  declarations: [AddPositionMutationComponent, EditPositionMutationComponent, PositionMutationComponent, HistoryPositionMutationComponent],
  imports: [
    CommonModule,
    PositionMutationRoutingModule,

    SharedModulesModule,
  ]
})
export class PositionMutationModule { }
