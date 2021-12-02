import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { WorkUnitService } from '@_services/human-resource/master-data/work-unit.service';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs/operators';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { AlphaNumericValidation, NumericValidation, UrlValidation } from 'src/app/shared-modules/customValidation';

@Component({
  selector: 'app-add-work-unit',
  templateUrl: './add-work-unit.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/add/add.scss',
    './add-work-unit.component.scss'
  ]
})
export class AddWorkUnitComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: WorkUnitService,
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
        title: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state_or_province: ['', [Validators.required]],
        city: ['', [Validators.required]],
        address: ['', [Validators.required]],
        postcode: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), NumericValidation]],
        phone: ['', [Validators.required, NumericValidation]],
        fax: ['', [NumericValidation]],
        email: ['', [Validators.required, Validators.email]],
        url: ['', [UrlValidation]],
      })
    );
  }

  options$ = {
    parent$: this._service.options$(1, this.company_id).pipe(
      filter(rows => rows !== undefined),
      map(rows => [{ id: '', name: 'Root' }, ...rows]),
    )
  };
}
