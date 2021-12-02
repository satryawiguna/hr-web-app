import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { GenderService } from 'src/app/_services/common/gender.service';
import { ChildService } from 'src/app/_services/human-resource/personal/child.service';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: ChildService,
    public fb: FormBuilder,
    public gender: GenderService
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        full_name: ['', [Validators.required]],
        nick_name: ['', [Validators.required]],
        gender_id: ['', [Validators.required]],
        order: ['', [Validators.required]],
        birth_place: ['', [Validators.required]],
        birth_date: ['', [Validators.required]],
        has_bpjs_kesehatan: [false],
        bpjs_kesehatan_number: ['', [Validators.required]],
        bpjs_kesehatan_date: ['', [Validators.required]],
        bpjs_kesehatan_class: ['', [Validators.required]],
      })
    );
  }

  cbHasBpjsKesehatan = [
    this.form.get('bpjs_kesehatan_number'),
    this.form.get('bpjs_kesehatan_date'),
    this.form.get('bpjs_kesehatan_class'),
  ];

  genderOptions$ = this.gender.options$(1);

  bpjs_kesehatan_classes = [
    { id: 'I', name: 'Class I' },
    { id: 'II', name: 'Class II' },
    { id: 'III', name: 'Class III' },
  ];

}
