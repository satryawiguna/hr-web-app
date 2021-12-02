import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { NonFormalEducationHistoryService } from 'src/app/_services/human-resource/personal/non-formal-education-history.service';
import { dateFormat } from './../../../../../../shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-non-formal-education-history',
  templateUrl: './non-formal-education-history.component.html',
  styleUrls: ['./non-formal-education-history.component.scss']
})
export class NonFormalEducationHistoryComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: NonFormalEducationHistoryService,
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
    company_id: [''],
    employee_id: [''],
    date: [''],
    // is_active: ['']
  });

  componentName = 'non-formal-education-history';

  columns = NonFormalEducationHistoryColumns;

}

export const NonFormalEducationHistoryColumns = {
  action() { return ['selection', 'edit', 'delete']; },
  employee_name(row) {
    return row.employee[0].full_name;
  },
  name(row) {
    return row.name;
  },
  type(row) {
    return row.type;
  },
  start_date(row) {
    return dateFormat(row.start_date);
  },
  end_date(row) {
    return dateFormat(row.end_date);
  },
  institution(row) {
    return row.institution;
  },
  created_by(row) {
    return row.created_by;
  },
  modified_by(row) {
    return row.modified_by;
  }
};
