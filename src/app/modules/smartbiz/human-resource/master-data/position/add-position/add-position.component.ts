import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs/operators';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { AlphaNumericValidation } from 'src/app/shared-modules/customValidation';
import { PositionService } from 'src/app/_services/human-resource/master-data/position.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/add/add.scss',
    './add-position.component.scss'
  ]
})
export class AddPositionComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: PositionService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_id: ['', [Validators.required]],
        parent_id: [''],
        code: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), AlphaNumericValidation]],
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        description: [''],
      })
    );
  }

  parentOptions$ = this._service.options$(1, this.company_id).pipe(
    filter(rows => rows !== undefined),
    map(rows => [{ id: '', name: 'Root' }, ...rows]),
  );
}
