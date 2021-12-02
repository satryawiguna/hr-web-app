import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { EmployeeNumberScaleService } from 'src/app/_services/common/employee-number-scale.service';

@Component({
  selector: 'app-employee-number-scale',
  templateUrl: './employee-number-scale.component.html',
  styleUrls: [
    './employee-number-scale.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class EmployeeNumberScaleComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: EmployeeNumberScaleService,
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

  componentName = 'employee-number-scale';

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
