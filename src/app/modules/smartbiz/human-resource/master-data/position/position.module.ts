import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionComponent } from './position.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { PositionRoutingModule } from './position-routing.module';
import { AddPositionComponent } from './add-position/add-position.component';
import { EditPositionComponent } from './edit-position/edit-position.component';



@NgModule({
  declarations: [PositionComponent, AddPositionComponent, EditPositionComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    PositionRoutingModule
  ]
})
export class PositionModule { }
