import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddOtherEquipmentComponent } from './../add-other-equipment/add-other-equipment.component';

@Component({
  selector: 'app-edit-other-equipment',
  templateUrl: './edit-other-equipment.component.html',
  styleUrls: ['./edit-other-equipment.component.scss']
})
export class EditOtherEquipmentComponent extends AddOtherEquipmentComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
