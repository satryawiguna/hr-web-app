import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { ContractTypeService } from 'src/app/_services/common/contract-type.service';

@Component({
  selector: 'app-contract-type',
  templateUrl: './contract-type.component.html',
  styleUrls: [
    './contract-type.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class ContractTypeComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: ContractTypeService,
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
    is_active: ['']
  });

  componentName = 'contract-type';

  columns = {
    name(row) {
      return row.name;
    },
    slug(row) {
      return row.slug;
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

}
