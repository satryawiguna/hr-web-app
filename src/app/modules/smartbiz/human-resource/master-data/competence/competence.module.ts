import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenceComponent } from './competence.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { CompetenceRoutingModule } from './competence-routing.module';
import { AddCompetenceComponent } from './add-competence/add-competence.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';



@NgModule({
  declarations: [CompetenceComponent, AddCompetenceComponent, EditCompetenceComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    CompetenceRoutingModule
  ]
})
export class CompetenceModule { }
