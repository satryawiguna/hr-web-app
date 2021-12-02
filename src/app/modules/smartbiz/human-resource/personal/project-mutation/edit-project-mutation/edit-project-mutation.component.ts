import { Component, OnInit } from '@angular/core';
import { setDetailToForm, onSubmitInEditComponent } from '@_shared-modules/base/pages/edit/edit';
import { AddProjectMutationComponent } from '../add-project-mutation/add-project-mutation.component';

@Component({
  selector: 'app-edit-project-mutation',
  templateUrl: './edit-project-mutation.component.html',
  styleUrls: ['./edit-project-mutation.component.scss']
})
export class EditProjectMutationComponent extends AddProjectMutationComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
