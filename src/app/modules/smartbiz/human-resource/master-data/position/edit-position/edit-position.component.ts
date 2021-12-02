import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { AddPositionComponent } from './../add-position/add-position.component';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/edit/edit.scss',
    './edit-position.component.scss'
  ]
})
export class EditPositionComponent extends AddPositionComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
