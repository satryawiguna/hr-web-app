import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { of } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { AddRoleComponent } from './../add-role/add-role.component';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: [
    './edit-role.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss'
  ]
})
export class EditRoleComponent extends AddRoleComponent {

  permissions = [];

  permissionOptions$ = of(null).pipe(
    tap(() => this.form.get('permission_ids').disable()),
    switchMap(() => this.permission.getOptionsFromAPI$(1).pipe(
      concatMap(options =>
        this._service.detailPermission(this.initData.id).pipe(
          tap((rows: any[]) => this.form.get('permission_ids').setValue(rows.map(row => row.id))),
          tap((rows: any[]) => this.permissions = rows),
          map(detailPermissionsOptions => [...options, ...detailPermissionsOptions]),
        )
      ),
    )),
    tap(() => this.form.get('permission_ids').enable()),
  );

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }
}
