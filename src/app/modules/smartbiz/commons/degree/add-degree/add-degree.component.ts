import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { DegreeService } from './../../../../../_services/common/degree.service';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { FormBuilder, Validators } from '@angular/forms';
import { Degree } from 'src/app/_models/common/degree';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
  styleUrls: [
    '../../../../../shared-modules/base/pages/add/add.scss',
    './add-degree.component.scss'
  ]
})
export class AddDegreeComponent extends Add {
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
