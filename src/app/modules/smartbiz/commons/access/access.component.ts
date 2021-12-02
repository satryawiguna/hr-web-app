import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AccessService } from '@_services/common/access.service';
import List from '@_shared-modules/base/pages/list/list';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: [
    './access.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class AccessComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: AccessService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource'
    );
  }

  filter = this.fb.group({
    query: [''],
    is_active: ['']
  });

  componentName = 'access';

  columns = {
    name(row) {
      return row.name;
    },
    slug(row) {
      return row.slug;
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

}
