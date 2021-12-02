import { Component, OnInit } from '@angular/core';
import List from '@_shared-modules/base/pages/list/list';
import { Store } from '@ngxs/store';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GradeService } from '@_services/human-resource/master-data/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: GradeService,
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

  componentName = 'grade';

  columns = {
    grade_name(row) {
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
