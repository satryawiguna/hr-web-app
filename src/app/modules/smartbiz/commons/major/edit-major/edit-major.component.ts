import { Store } from '@ngxs/store';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MajorService } from 'src/app/_services/common/major.service';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-major',
  templateUrl: './edit-major.component.html',
  styleUrls: [
    './edit-major.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss'
  ]
})
export class EditMajorComponent extends Edit {

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
