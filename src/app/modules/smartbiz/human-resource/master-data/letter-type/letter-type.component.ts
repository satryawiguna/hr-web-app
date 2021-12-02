import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { LetterTypeService } from 'src/app/_services/human-resource/master-data/letter-type.service';

@Component({
  selector: 'app-letter-type',
  templateUrl: './letter-type.component.html',
  styleUrls: ['./letter-type.component.scss']
})
export class LetterTypeComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: LetterTypeService,
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
    is_active: [''],
    company_id: [''],
  });

  componentName = 'letter-type';

  columns = {
    code(row) {
      return row.code;
    },
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

