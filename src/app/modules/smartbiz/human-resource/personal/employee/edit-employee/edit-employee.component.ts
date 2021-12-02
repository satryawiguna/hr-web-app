import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { AddEmployeeComponent } from './../add-employee/add-employee.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent extends AddEmployeeComponent {

  // ? disabling add-employee method afterSubmitSucceedd
  afterSubmitSucceed() { }

  ngOnInitInEditComponent() {
    setDetailToForm(this);
    if (this.initData) {
      this.filterDatatables.setValue({ query: '', employee_id: this.initData.id });
      // ? fix bug marital_status_id 1 not disabling family tab
      if (this.initData.marital_status?.[0].id === 1) {
        this.form.get('marital_status_id').setValue(2);
        this.form.get('marital_status_id').setValue(1);
      }

      this.childPredefinedForm = {
        employee_id: this.initData.id
      };
    }
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
