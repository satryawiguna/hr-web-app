import { Component } from '@angular/core';
import { setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { onSubmitInEditComponent } from './../../../../../../../shared-modules/base/pages/edit/edit';
import { AddNonFormalEducationHistoryComponent } from './../add-non-formal-education-history/add-non-formal-education-history.component';

@Component({
  selector: 'app-edit-non-formal-education-history',
  templateUrl: './edit-non-formal-education-history.component.html',
  styleUrls: ['./edit-non-formal-education-history.component.scss']
})
export class EditNonFormalEducationHistoryComponent extends AddNonFormalEducationHistoryComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
