import { Store } from '@ngxs/store';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MajorService } from 'src/app/_services/common/major.service';
import { FormBuilder, Validators } from '@angular/forms';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { Major } from 'src/app/_models/common/major';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-major',
  templateUrl: './add-major.component.html',
  styleUrls: [
    './add-major.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss'
  ]
})
export class AddMajorComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: MajorService,
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
        description: ['']
      })
    );
  }
}
