import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { WorkCompetenceService } from 'src/app/_services/human-resource/personal/work-competence.service';

@Component({
  selector: 'app-add-work-competence',
  templateUrl: './add-work-competence.component.html',
  styleUrls: ['./add-work-competence.component.scss']
})
export class AddWorkCompetenceComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: WorkCompetenceService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        reference_number: ['', [Validators.required]],
        competence_id: ['', [Validators.required]],
        issue_date: ['', [Validators.required]],
        validity: ['', [Validators.required]]
      })
    );
  }

}
