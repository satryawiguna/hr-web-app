import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { OrganizationHistoryService } from 'src/app/_services/human-resource/personal/organization-history.service';

@Component({
  selector: 'app-add-organization-history',
  templateUrl: './add-organization-history.component.html',
  styleUrls: ['./add-organization-history.component.scss']
})
export class AddOrganizationHistoryComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: OrganizationHistoryService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        name: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
        activity: ['', [Validators.required]]
      })
    );
  }

}
