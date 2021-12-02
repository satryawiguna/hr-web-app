import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddChildComponent } from './../add-child/add-child.component';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.scss']
})
export class EditChildComponent extends AddChildComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
