import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { OrganizationHistoryService } from 'src/app/_services/human-resource/personal/organization-history.service';
import { dateFormat } from './../../../../../../shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-organization-history',
  templateUrl: './organization-history.component.html',
  styleUrls: ['./organization-history.component.scss']
})
export class OrganizationHistoryComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: OrganizationHistoryService,
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

  componentName = 'organization-history';

  columns = OrganizationHistoryColumns;

}

export const OrganizationHistoryColumns = {
  action() { return ['selection', 'edit', 'delete']; },
  employee_name(row) {
    return row.employee[0].full_name;
  },
  name(row) {
    return row.name;
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
