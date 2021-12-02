import { Component, OnInit } from '@angular/core';
import List from '@_shared-modules/base/pages/list/list';
import { Store } from '@ngxs/store';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import { WorkUnitService } from '@_services/human-resource/master-data/work-unit.service';
import { dateFormat } from '@_shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-work-unit-mutation',
  templateUrl: './work-unit-mutation.component.html',
  styleUrls: ['./work-unit-mutation.component.scss']
})
export class WorkUnitMutationComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: EmployeeService,
    public workUnit: WorkUnitService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource',
    );
  }

  filter = this.fb.group({
    query: [''],
    company_id: [''],
    work_unit: [''],
    mutation_range: [''],
  });

  componentName = 'work-unit-mutation';

  columns = {
    action() { return ['history']; },
    nip(row) {
      return row.nip;
    },
    full_name(row) {
      return row.full_name;
    },
    last_work_unit(row) {
      return row.mutations?.[row.mutations.length - 1]?.work_unit;
    },
    last_mutation_date(row) {
      return dateFormat(row.mutations?.[row.mutations.length - 1]?.date);
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

  optionsWorkUnit$ = this.workUnit.options$('', this.company_id);

}
