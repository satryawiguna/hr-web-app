import { Store } from '@ngxs/store';
import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from '../../../../../shared-modules/base/pages/edit/edit';
import { Router, ActivatedRoute } from '@angular/router';
import { DegreeService } from '../../../../../_services/common/degree.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Degree } from 'src/app/_models/common/degree';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-degree',
  templateUrl: './edit-degree.component.html',
  styleUrls: [
    '../../../../../shared-modules/base/pages/edit/edit.scss',
    './edit-degree.component.scss'
  ]
})
export class EditDegreeComponent extends Edit {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: DegreeService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        description: [''],
      })
    );
  }
}
