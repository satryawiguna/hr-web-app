import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddWorkUnitComponent } from './../add-work-unit/add-work-unit.component';

@Component({
  selector: 'app-edit-work-unit',
  templateUrl: './edit-work-unit.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/edit/edit.scss',
    './edit-work-unit.component.scss'
  ]
})
export class EditWorkUnitComponent extends AddWorkUnitComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
