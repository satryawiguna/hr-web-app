import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from 'src/app/shared-modules/base/pages/edit/edit';
import { AddOrganizationHistoryComponent } from './../add-organization-history/add-organization-history.component';

@Component({
  selector: 'app-edit-organization-history',
  templateUrl: './edit-organization-history.component.html',
  styleUrls: ['./edit-organization-history.component.scss']
})
export class EditOrganizationHistoryComponent extends AddOrganizationHistoryComponent {

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }
  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
