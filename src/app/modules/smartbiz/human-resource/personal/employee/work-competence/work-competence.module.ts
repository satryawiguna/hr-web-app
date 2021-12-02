import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddWorkCompetenceComponent } from './add-work-competence/add-work-competence.component';
import { EditWorkCompetenceComponent } from './edit-work-competence/edit-work-competence.component';
import { WorkCompetenceRoutingModule } from './work-competence-routing.module';
import { WorkCompetenceComponent } from './work-competence.component';

@NgModule({
  declarations: [WorkCompetenceComponent, AddWorkCompetenceComponent, EditWorkCompetenceComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    WorkCompetenceRoutingModule
  ],
  exports: [WorkCompetenceComponent, AddWorkCompetenceComponent, EditWorkCompetenceComponent],
})
export class WorkCompetenceModule { }
