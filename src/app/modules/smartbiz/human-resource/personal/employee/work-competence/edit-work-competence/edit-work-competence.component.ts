import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddWorkCompetenceComponent } from './../add-work-competence/add-work-competence.component';

@Component({
  selector: 'app-edit-work-competence',
  templateUrl: './edit-work-competence.component.html',
  styleUrls: ['./edit-work-competence.component.scss']
})
export class EditWorkCompetenceComponent extends AddWorkCompetenceComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
