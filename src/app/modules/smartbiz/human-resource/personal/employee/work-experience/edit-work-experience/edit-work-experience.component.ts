import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddWorkExperienceComponent } from './../add-work-experience/add-work-experience.component';

@Component({
  selector: 'app-edit-work-experience',
  templateUrl: './edit-work-experience.component.html',
  styleUrls: ['./edit-work-experience.component.scss']
})
export class EditWorkExperienceComponent extends AddWorkExperienceComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
