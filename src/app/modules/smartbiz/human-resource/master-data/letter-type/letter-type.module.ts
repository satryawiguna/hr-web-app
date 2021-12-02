import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterTypeRoutingModule } from './letter-type-routing.module';
import { LetterTypeComponent } from './letter-type.component';
import { AddLetterTypeComponent } from './add-letter-type/add-letter-type.component';
import { EditLetterTypeComponent } from './edit-letter-type/edit-letter-type.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [LetterTypeComponent, AddLetterTypeComponent, EditLetterTypeComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    LetterTypeRoutingModule
  ]
})
export class LetterTypeModule { }
