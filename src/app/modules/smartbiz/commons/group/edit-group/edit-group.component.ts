import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from '@_shared-modules/base/pages/edit/edit';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupService } from '@_services/common/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: [
    './edit-group.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss',
  ]
})
export class EditGroupComponent extends Edit {

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
