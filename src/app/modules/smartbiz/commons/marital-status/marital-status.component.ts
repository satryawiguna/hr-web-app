import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { MaritalStatusService } from 'src/app/_services/common/marital-status.service';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: [
    './marital-status.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class MaritalStatusComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: MaritalStatusService,
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

  componentName = 'marital-status';

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
