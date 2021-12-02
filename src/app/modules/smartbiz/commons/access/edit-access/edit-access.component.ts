import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from '@_shared-modules/base/pages/edit/edit';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AccessService } from '@_services/common/access.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-access',
  templateUrl: './edit-access.component.html',
  styleUrls: [
    './edit-access.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss',
  ]
})
export class EditAccessComponent extends Edit {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: AccessService,
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
