import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { setMinMaxDate } from '@_shared-modules/components/input-date/input-date.component';
import List from 'src/app/shared-modules/base/pages/list/list';
import { WorkCompetenceService } from 'src/app/_services/human-resource/personal/work-competence.service';

@Component({
  selector: 'app-work-competence',
  templateUrl: './work-competence.component.html',
  styleUrls: ['./work-competence.component.scss']
})
export class WorkCompetenceComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: WorkCompetenceService,
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
    competence_id: [''],
    start_issue_date: [''],
    end_issue_date: [''],
    // is_active: ['']
  });

  componentName = 'work-competence';

  columns = WorkCompetenceColumns;

  afterNgOnInit() {
    this.subs.sink = setMinMaxDate({
      start: this.filter.get('start_issue_date'),
      end: this.filter.get('end_issue_date')
    }).subscribe(val => {
      this.endIssueDate.minDate = val.minDate;
      this.endIssueDate.maxDate = val.maxDate;
    });
  }
}

export const WorkCompetenceColumns = {
  action() { return ['selection', 'edit', 'delete']; },
  employee_name(row) {
    return row.employee[0].full_name;
  },
  competence_id(row) {
    return row.competence?.[0].name;
  },
  reference_number(row) {
    return row.reference_number;
  },
  date(row) {
    return row.date;
  },
  validity(row) {
    return row.validity;
  },
  created_by(row) {
    return row.created_by;
  },
  modified_by(row) {
    return row.modified_by;
  }
};
