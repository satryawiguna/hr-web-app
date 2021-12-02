import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { OtherEquipmentService } from 'src/app/_services/human-resource/personal/other-equipment.service';
import { dateFormat } from './../../../../../../shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-other-equipment',
  templateUrl: './other-equipment.component.html',
  styleUrls: ['./other-equipment.component.scss']
})
export class OtherEquipmentComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: OtherEquipmentService,
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

  componentName = 'other-equipment';

  columns = {
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
    description(row) {
      return row.description;
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

}
