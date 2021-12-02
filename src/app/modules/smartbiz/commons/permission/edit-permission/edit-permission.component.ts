import { Component } from '@angular/core';
import { onSubmitInEditComponent, setDetailToForm } from '@_shared-modules/base/pages/edit/edit';
import { of } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { AddPermissionComponent } from './../add-permission/add-permission.component';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: [
    './edit-permission.component.scss',
    '../../../../../shared-modules/base/pages/edit/edit.scss',
  ]
})
export class EditPermissionComponent extends AddPermissionComponent {

  accesses = [];

  accessOptions$ = of(null).pipe(
    tap(() => this.form.get('access_ids').disable()),
    switchMap(() => this.access.getOptionsFromAPI$(1).pipe(
      concatMap(options =>
        this._service.detailAccess(this.initData.id).pipe(
          tap((rows: any[]) => this.form.get('access_ids').setValue(rows.map(row => row.id))),
          tap((rows: any[]) => this.accesses = rows),
          map(detailAccesssOptions => [...options, ...detailAccesssOptions]),
        )
      ),
    )),
    tap(() => this.form.get('access_ids').enable()),
  );

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

  onSubmit() {
    onSubmitInEditComponent(this);
  }

}
