import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OfficeService } from '@_services/human-resource/master-data/office.service';
import Edit from '@_shared-modules/base/pages/edit/edit';
import { NumericValidation } from '@_shared-modules/customValidation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: [
    './edit-office.component.scss',
    '../../../../../../shared-modules/base/pages/edit/edit.scss'
  ]
})
export class EditOfficeComponent extends Edit {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: OfficeService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        type: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state_or_province: ['', [Validators.required]],
        city: ['', [Validators.required]],
        address: ['', [Validators.required]],
        postcode: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), NumericValidation]],
        phone: ['', [Validators.required]],
        fax: ['', [Validators.required]],
        email: ['', [Validators.required]],
        latitude: [''],
        longitude: [''],
      })
    );
  }

  options$ = OfficeOptions$(this);
}

export const OfficeOptions$ = (ctx: {
  store: Store,
}) => ({
  officeTypeOptions$: ctx.store.select(state => state.selectInstantState.officeType),
});

