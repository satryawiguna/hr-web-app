import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { CompanyCategoryService } from '../../../../_services/common/company-category.service';

@Component({
  selector: 'app-company-category',
  templateUrl: './company-category.component.html',
  styleUrls: [
    './company-category.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss'
  ]
})
export class CompanyCategoryComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: CompanyCategoryService,
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

  componentName = 'company-category';

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
