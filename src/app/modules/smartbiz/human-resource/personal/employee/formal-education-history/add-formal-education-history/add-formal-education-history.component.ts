import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { MajorService } from 'src/app/_services/common/major.service';
import { FormalEducationHistoryService } from 'src/app/_services/human-resource/personal/formal-education-history.service';
import { DegreeService } from './../../../../../../../_services/common/degree.service';

@Component({
  selector: 'app-add-formal-education-history',
  templateUrl: './add-formal-education-history.component.html',
  styleUrls: ['./add-formal-education-history.component.scss']
})
export class AddFormalEducationHistoryComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: FormalEducationHistoryService,
    public fb: FormBuilder,

    public degree: DegreeService,
    public major: MajorService,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        name: ['', [Validators.required]],
        degree_id: ['', [Validators.required]],
        major_id: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
      })
    );
  }


  options$ = {
    major$: this.major.options$(1),
    degree$: this.degree.options$(1),
  };

}
