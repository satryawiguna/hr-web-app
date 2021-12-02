import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { DegreeService } from '../../../../_services/common/degree.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: [
    './degree.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class DegreeComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: DegreeService,
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

  componentName = 'degree';

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
