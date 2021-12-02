import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { OfficeService } from '@_services/human-resource/master-data/office.service';
import List from '@_shared-modules/base/pages/list/list';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: [
    './office.component.scss',
    '../../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class OfficeComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: OfficeService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource'
    );
  }

  options$ = OfficeOptions$(this);

  filter = this.fb.group({
    query: [''],
    is_active: [''],
    company_id: [''],
    type: [''],
    country: [''],
  });

  /** replace with office when have permission */
  componentName = 'competence';

  columns = {
    name(row) {
      return row.name;
    },
    slug(row) {
      return row.slug;
    },
    type(row) {
      return row.type;
    },
    country(row) {
      return row.country;
    },
    state_or_province(row) {
      return row.state_or_province;
    },
    city(row) {
      return row.city;
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

}

export const OfficeOptions$ = (ctx: {
  store: Store,
}) => ({
  officeTypeOptions$: ctx.store.select(state => state.selectInstantState.officeType),
});
