import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddFormalEducationHistoryComponent } from './../add-formal-education-history/add-formal-education-history.component';

@Component({
  selector: 'app-edit-formal-education-history',
  templateUrl: './edit-formal-education-history.component.html',
  styleUrls: ['./edit-formal-education-history.component.scss']
})
export class EditFormalEducationHistoryComponent extends AddFormalEducationHistoryComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
