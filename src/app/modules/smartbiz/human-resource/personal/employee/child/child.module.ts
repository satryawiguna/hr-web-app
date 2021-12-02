import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { AddChildComponent } from './add-child/add-child.component';
import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { EditChildComponent } from './edit-child/edit-child.component';



@NgModule({
  declarations: [ChildComponent, AddChildComponent, EditChildComponent],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SharedModulesModule,
  ],
  exports: [ChildComponent, AddChildComponent, EditChildComponent]
})
export class ChildModule { }
