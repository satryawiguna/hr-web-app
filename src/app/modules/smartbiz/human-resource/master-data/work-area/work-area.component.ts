import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { WorkAreaService } from 'src/app/_services/human-resource/master-data/work-area.service';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.scss']
})
export class WorkAreaComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: WorkAreaService,
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
    is_active: [''],
    company_id: [''],
  });

  componentName = 'work-area';

  columns = {
    code(row) {
      return row.code;
    },
    title(row) {
      return row.title;
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

