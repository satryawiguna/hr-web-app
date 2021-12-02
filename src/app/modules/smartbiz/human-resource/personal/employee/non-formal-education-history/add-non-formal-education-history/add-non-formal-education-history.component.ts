import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { NonFormalEducationHistoryService } from 'src/app/_services/human-resource/personal/non-formal-education-history.service';

@Component({
  selector: 'app-add-non-formal-education-history',
  templateUrl: './add-non-formal-education-history.component.html',
  styleUrls: ['./add-non-formal-education-history.component.scss']
})
export class AddNonFormalEducationHistoryComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: NonFormalEducationHistoryService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        type: ['', [Validators.required]],
        name: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
        institution: ['', [Validators.required]]
      })
    );
  }

}
