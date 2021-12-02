import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { setMinMaxDate } from '@_shared-modules/components/input-date/input-date.component';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { WorkExperienceService } from 'src/app/_services/human-resource/personal/work-experience.service';

@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.component.html',
  styleUrls: ['./add-work-experience.component.scss']
})
export class AddWorkExperienceComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: WorkExperienceService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        business_type: ['', [Validators.required]],
        company: ['', [Validators.required]],
        position: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]]
      })
    );
  }

  endDate = { minDate: new Date(), maxDate: new Date() };

  afterNgOnInit() {
    this.subs.sink = setMinMaxDate({
      start: this.form.get('start_date'),
      end: this.form.get('end_date')
    }).subscribe(val => {
      this.endDate.minDate = val.minDate;
      this.endDate.maxDate = val.maxDate;
    });
  }
}
