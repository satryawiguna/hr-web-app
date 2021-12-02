import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddNonFormalEducationHistoryComponent } from './add-non-formal-education-history/add-non-formal-education-history.component';
import { EditNonFormalEducationHistoryComponent } from './edit-non-formal-education-history/edit-non-formal-education-history.component';
import { NonFormalEducationHistoryRoutingModule } from './non-formal-education-history-routing.module';
import { NonFormalEducationHistoryComponent } from './non-formal-education-history.component';

@NgModule({
  declarations: [NonFormalEducationHistoryComponent, AddNonFormalEducationHistoryComponent, EditNonFormalEducationHistoryComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    NonFormalEducationHistoryRoutingModule
  ],
  exports: [NonFormalEducationHistoryComponent, AddNonFormalEducationHistoryComponent, EditNonFormalEducationHistoryComponent],
})
export class NonFormalEducationHistoryModule { }
