import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '../../../../../shared-modules/base/pages/edit/edit';
import { AddBankComponent } from './../add-bank/add-bank.component';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: [
    '../../../../../shared-modules/base/pages/edit/edit.scss',
    './edit-bank.component.scss'
  ]
})
export class EditBankComponent extends AddBankComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
