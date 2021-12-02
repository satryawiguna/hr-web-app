import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { FormalEducationHistoryService } from 'src/app/_services/human-resource/personal/formal-education-history.service';
import { dateFormat } from './../../../../../../shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-formal-education-history',
  templateUrl: './formal-education-history.component.html',
  styleUrls: ['./formal-education-history.component.scss']
})
export class FormalEducationHistoryComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: FormalEducationHistoryService,
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
    degree_id: [''],
    date: [''],
    major_id: ['']
    // is_active: ['']
  });

  componentName = 'formal-intitution';

  columns = FormalEducationHistoryColumns;

}

export const FormalEducationHistoryColumns = {
  action() { return ['selection', 'edit', 'delete']; },
  employee_name(row) {
    return row.employee[0].full_name;
  },
  name(row) {
    return row.name;
  },
  degree_id(row) {
    return row.degree?.[0].name;
  },
  major_id(row) {
    return row.major?.[0].name;
  },
  start_date(row) {
    return dateFormat(row.start_date);
  },
  end_date(row) {
    return dateFormat(row.end_date);
  },
  created_by(row) {
    return row.created_by;
  },
  modified_by(row) {
    return row.modified_by;
  }
};
