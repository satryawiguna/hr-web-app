import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { PermissionService } from '@_services/common/permission.service';
import { RoleService } from '@_services/common/role.service';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from './../../../../../_services/common/group.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: [
    './add-role.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss'
  ]
})
export class AddRoleComponent extends Add {

  permissionOptions$ = this.permission.options$(1);
  permissionValueOptions = [
    { id: 'ALLOW', name: 'Allow' },
    { id: 'DENY', name: 'Deny' },
  ];

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: RoleService,
    public fb: FormBuilder,
    public permission: PermissionService,
    public group: GroupService,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        group_id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        permission_ids: ['', [Validators.required]],
        description: [''],
      })
    );
  }

  groupOptions$ = this.group.options$(1);

  setPermission(event) {
    this.formPermission = event;
  }
}
