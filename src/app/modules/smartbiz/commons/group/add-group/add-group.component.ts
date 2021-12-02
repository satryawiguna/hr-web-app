import { Component, OnInit, ElementRef } from '@angular/core';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { GroupService } from '@_services/common/group.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: [
    './add-group.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss',
  ]
})
export class AddGroupComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: GroupService,
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
