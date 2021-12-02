import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectMutationRoutingModule } from './project-mutation-routing.module';
import { ProjectMutationComponent } from './project-mutation.component';
import { AddProjectMutationComponent } from './add-project-mutation/add-project-mutation.component';
import { EditProjectMutationComponent } from './edit-project-mutation/edit-project-mutation.component';
import { HistoryProjectMutationComponent } from './history-project-mutation/history-project-mutation.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [ProjectMutationComponent, AddProjectMutationComponent, EditProjectMutationComponent, HistoryProjectMutationComponent],
  imports: [
    CommonModule,
    ProjectMutationRoutingModule,
    SharedModulesModule
  ]
})
export class ProjectMutationModule { }
