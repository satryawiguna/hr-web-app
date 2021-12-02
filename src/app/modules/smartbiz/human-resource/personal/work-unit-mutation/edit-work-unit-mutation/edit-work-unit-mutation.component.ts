import { Component, OnInit } from '@angular/core';
import { AddWorkUnitMutationComponent } from '../add-work-unit-mutation/add-work-unit-mutation.component';
import { setDetailToForm, onSubmitInEditComponent } from '@_shared-modules/base/pages/edit/edit';

@Component({
  selector: 'app-edit-work-unit-mutation',
  templateUrl: './edit-work-unit-mutation.component.html',
  styleUrls: ['./edit-work-unit-mutation.component.scss']
})
export class EditWorkUnitMutationComponent extends AddWorkUnitMutationComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
