import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddFormalEducationHistoryComponent } from './add-formal-education-history/add-formal-education-history.component';
import { EditFormalEducationHistoryComponent } from './edit-formal-education-history/edit-formal-education-history.component';
import { FormalEducationHistoryRoutingModule } from './formal-education-history-routing.module';
import { FormalEducationHistoryComponent } from './formal-education-history.component';

@NgModule({
  declarations: [FormalEducationHistoryComponent, AddFormalEducationHistoryComponent, EditFormalEducationHistoryComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    FormalEducationHistoryRoutingModule
  ],
  exports: [FormalEducationHistoryComponent, AddFormalEducationHistoryComponent, EditFormalEducationHistoryComponent],
})
export class FormalEducationHistoryModule { }
