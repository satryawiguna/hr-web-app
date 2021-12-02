import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddWorkAreaComponent } from './../add-work-area/add-work-area.component';

@Component({
  selector: 'app-edit-work-area',
  templateUrl: './edit-work-area.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/edit/edit.scss',
    './edit-work-area.component.scss'
  ]
})
export class EditWorkAreaComponent extends AddWorkAreaComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
