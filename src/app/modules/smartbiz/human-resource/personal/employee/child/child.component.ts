import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { GenderService } from 'src/app/_services/common/gender.service';
import { ChildService } from 'src/app/_services/human-resource/personal/child.service';
import { dateFormat } from './../../../../../../shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends List {


  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: ChildService,
    public gender: GenderService
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource'
    );
  }

  genderOptions$ = this.gender.options$();

  filter = this.fb.group({
    query: [''],
    company_id: [''],
    employee_id: [''],
    gender_id: ['']
    // is_active: ['']
  });

  componentName = 'child';

  columns = ChildColumns;

}

export const ChildColumns = {
  action() { return ['selection', 'edit', 'delete']; },
  employee_name(row) {
    return row.employee[0].full_name;
  },
  full_name(row) {
    return row.full_name;
  },
  nick_name(row) {
    return row.nick_name;
  },
  gender_id(row) {
    return row.gender?.[0].name;
  },
  order(row) {
    return row.order;
  },
  birth_place(row) {
    return row.birth_place;
  },
  birth_date(row) {
    return dateFormat(row.birth_date);
  },
  bpjs_kesehatan(row) {
    if (!row.has_bpjs_kesehatan) {
      return '-';
    } else {
      const bpjs_row = `Number: ${row.bpjs_kesehatan_number} \n
                        Date: ${dateFormat(row.bpjs_kesehatan_date)} \n
                        Class: ${row.bpjs_kesehatan_class}`;
      return bpjs_row;
    }
  },
  created_by(row) {
    return row.created_by;
  },
  modified_by(row) {
    return row.modified_by;
  }
};
