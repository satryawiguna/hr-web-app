import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddCompanyComponent } from './../add-company/add-company.component';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: [
    './edit-company.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss',
  ]
})
export class EditCompanyComponent extends AddCompanyComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
