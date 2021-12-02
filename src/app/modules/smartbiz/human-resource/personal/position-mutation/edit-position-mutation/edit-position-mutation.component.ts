import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { AddPositionMutationComponent } from './../add-position-mutation/add-position-mutation.component';

@Component({
  selector: 'app-edit-position-mutation',
  templateUrl: './edit-position-mutation.component.html',
  styleUrls: ['./edit-position-mutation.component.scss']
})
export class EditPositionMutationComponent extends AddPositionMutationComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
