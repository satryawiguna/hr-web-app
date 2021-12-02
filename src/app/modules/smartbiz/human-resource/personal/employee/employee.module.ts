import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChildModule } from './child/child.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormalEducationHistoryModule } from './formal-education-history/formal-education-history.module';
import { NonFormalEducationHistoryModule } from './non-formal-education-history/non-formal-education-history.module';
import { OrganizationHistoryModule } from './organization-history/organization-history.module';
import { WorkCompetenceModule } from './work-competence/work-competence.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';


@NgModule({
  declarations: [EmployeeComponent, AddEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    EmployeeRoutingModule,
    ChildModule,
    FormalEducationHistoryModule,
    NonFormalEducationHistoryModule,
    OrganizationHistoryModule,
    WorkCompetenceModule,
    WorkExperienceModule,
  ]
})
export class EmployeeModule { }
