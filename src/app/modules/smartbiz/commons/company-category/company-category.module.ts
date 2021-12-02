import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyCategoryRoutingModule } from './company-category-routing.module';
import { CompanyCategoryComponent } from './company-category.component';
import { AddCompanyCategoryComponent } from './add-company-category/add-company-category.component';
import { EditCompanyCategoryComponent } from './edit-company-category/edit-company-category.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [CompanyCategoryComponent, AddCompanyCategoryComponent, EditCompanyCategoryComponent],
  imports: [
    CommonModule,
    CompanyCategoryRoutingModule,
    SharedModulesModule
  ]
})
export class CompanyCategoryModule { }
