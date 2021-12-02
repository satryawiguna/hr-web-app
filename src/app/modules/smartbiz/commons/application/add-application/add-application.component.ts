import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ApplicationService } from './../../../../../_services/common/application.service';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { FormBuilder, Validators } from '@angular/forms';
import { Application } from 'src/app/_models/common/application';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: [
    '../../../../../shared-modules/base/pages/add/add.scss',
    './add-application.component.scss'
  ]
})
export class AddApplicationComponent extends Add {

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
