import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { ReligionService } from 'src/app/_services/common/religion.service';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: [
    './religion.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class ReligionComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: ReligionService,
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

  componentName = 'religion';

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
