import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import List from '@_shared-modules/base/pages/list/list';
import { dateFormat } from '@_shared-modules/components/input-date/input-date.component';
import { PositionService } from 'src/app/_services/human-resource/master-data/position.service';

@Component({
  selector: 'app-position-mutation',
  templateUrl: './position-mutation.component.html',
  styleUrls: ['./position-mutation.component.scss']
})
export class PositionMutationComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: EmployeeService,
    public position: PositionService,
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
    position: [''],
    mutation_range: [''],
  });

  componentName = 'position-mutation';

  columns = {
    action() { return ['history']; },
    nip(row) {
      return row.nip;
    },
    full_name(row) {
      return row.full_name;
    },
    last_position(row) {
      return row.mutations?.[row.mutations.length - 1]?.position;
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

  optionsPosition$ = this.position.options$('', this.company_id);
}
