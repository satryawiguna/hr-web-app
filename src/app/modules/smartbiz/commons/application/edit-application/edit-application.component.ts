import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from '../../../../../shared-modules/base/pages/edit/edit';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../../../../_services/common/application.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: [
    '../../../../../shared-modules/base/pages/edit/edit.scss',
    './edit-application.component.scss'
  ]
})
export class EditApplicationComponent extends Edit {


  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: ApplicationService,
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
