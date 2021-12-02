import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { SharedModulesModule } from '@_shared-modules/shared-modules.module';


@NgModule({
  declarations: [GroupComponent, AddGroupComponent, EditGroupComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModulesModule,
  ]
})
export class GroupModule { }
