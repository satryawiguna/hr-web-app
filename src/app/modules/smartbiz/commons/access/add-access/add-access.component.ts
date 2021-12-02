import { Component, OnInit, ElementRef } from '@angular/core';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { FormBuilder, Validators } from '@angular/forms';
import { AccessService } from '@_services/common/access.service';

@Component({
  selector: 'app-add-access',
  templateUrl: './add-access.component.html',
  styleUrls: [
    './add-access.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss',
  ]
})
export class AddAccessComponent extends Add {

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
