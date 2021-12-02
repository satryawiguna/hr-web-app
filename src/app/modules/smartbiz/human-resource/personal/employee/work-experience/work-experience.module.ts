import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddWorkExperienceComponent } from './add-work-experience/add-work-experience.component';
import { EditWorkExperienceComponent } from './edit-work-experience/edit-work-experience.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceComponent } from './work-experience.component';

@NgModule({
  declarations: [WorkExperienceComponent, AddWorkExperienceComponent, EditWorkExperienceComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    WorkExperienceRoutingModule
  ],
  exports: [WorkExperienceComponent, AddWorkExperienceComponent, EditWorkExperienceComponent],
})
export class WorkExperienceModule { }
