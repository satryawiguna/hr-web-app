import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { AddEmployeeNumberScaleComponent } from './../add-employee-number-scale/add-employee-number-scale.component';

@Component({
  selector: 'app-edit-employee-number-scale',
  templateUrl: './edit-employee-number-scale.component.html',
  styleUrls: [
    './edit-employee-number-scale.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss'
  ]
})
export class EditEmployeeNumberScaleComponent extends AddEmployeeNumberScaleComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
