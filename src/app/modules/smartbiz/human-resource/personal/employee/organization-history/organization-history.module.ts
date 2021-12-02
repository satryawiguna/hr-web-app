import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddOrganizationHistoryComponent } from './add-organization-history/add-organization-history.component';
import { EditOrganizationHistoryComponent } from './edit-organization-history/edit-organization-history.component';
import { OrganizationHistoryRoutingModule } from './organization-history-routing.module';
import { OrganizationHistoryComponent } from './organization-history.component';

@NgModule({
  declarations: [OrganizationHistoryComponent, AddOrganizationHistoryComponent, EditOrganizationHistoryComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    OrganizationHistoryRoutingModule
  ],
  exports: [OrganizationHistoryComponent, AddOrganizationHistoryComponent, EditOrganizationHistoryComponent],
})
export class OrganizationHistoryModule { }
