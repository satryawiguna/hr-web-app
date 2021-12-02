import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { WorkUnitService } from 'src/app/_services/human-resource/master-data/work-unit.service';

@Component({
  selector: 'app-work-unit',
  templateUrl: './work-unit.component.html',
  styleUrls: ['./work-unit.component.scss']
})
export class WorkUnitComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: WorkUnitService,
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

  componentName = 'work-unit';

  columns = {
    code(row) {
      return row.code;
    },
    work_unit_name(row) {
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

