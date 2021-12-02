import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AccessService } from '@_services/common/access.service';
import { PermissionService } from '@_services/common/permission.service';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: [
    './add-permission.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss',
  ]
})
export class AddPermissionComponent extends Add {
  accessOptions$ = this.access.options$(1);
  accessValueOptions = [
    { id: 'ALLOW', name: 'Allow' },
    { id: 'DENY', name: 'Deny' },
  ];

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: PermissionService,
    public fb: FormBuilder,
    public access: AccessService
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
        access_ids: ['', [Validators.required]],
        server: ['https://api.smartbiz.id/'],
        path: ['/api/v1/application'],
        description: [''],
        is_active: [0],
      })
    );
  }

  setAccess(event) {
    this.formAccess = event;
  }

}

// export const Options$ = (ctx: {
//   store: Store,
//   access: AccessService,
// }) => ({
//   accessOptions$: ctx.access.options$(1),
//   accessValueOptions$: ctx.store.select(state => state.selectInstantState.accessValue).pipe(removeOptionAll),
// });
