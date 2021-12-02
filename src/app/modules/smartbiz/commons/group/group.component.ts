import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GroupService } from '@_services/common/group.service';
import List from '@_shared-modules/base/pages/list/list';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: [
    './group.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class GroupComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: GroupService,
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

  componentName = 'group';

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
