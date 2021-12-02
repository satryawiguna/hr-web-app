import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { setMinMaxDate } from '@_shared-modules/components/input-date/input-date.component';
import List from 'src/app/shared-modules/base/pages/list/list';
import { WorkExperienceService } from 'src/app/_services/human-resource/personal/work-experience.service';
import { dateFormat } from './../../../../../../shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: WorkExperienceService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource'
    );
  }

  endIssueDate = { minDate: new Date(), maxDate: new Date() };

  filter = this.fb.group({
    query: [''],
    company_id: [''],
    employee_id: [''],
    start_issue_date: [''],
    end_issue_date: [''],
    // is_active: ['']
  });

  componentName = 'work-experience';

  columns = WorkExperienceColumns;

  afterNgOnInit() {
    this.subs.sink = setMinMaxDate({
      start: this.filter.get('start_issue_date'),
      end: this.filter.get('end_issue_date'),
      maxDate: new Date(),
    }).subscribe(val => {
      this.endIssueDate.minDate = val.minDate;
      this.endIssueDate.maxDate = val.maxDate;
    });
  }
}

export const WorkExperienceColumns = {
  action() { return ['selection', 'edit', 'delete']; },
  employee_name(row) {
    return row.employee[0].full_name;
  },
  company(row) {
    return row.company;
  },
  bussiness_type(row) {
    return row.bussiness_type;
  },
  position(row) {
    return row.position;
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
