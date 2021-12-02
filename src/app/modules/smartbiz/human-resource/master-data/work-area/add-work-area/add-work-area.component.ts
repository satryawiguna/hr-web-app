import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { AlphaNumericValidation, NumericValidation, UrlValidation } from 'src/app/shared-modules/customValidation';
import { WorkAreaService } from 'src/app/_services/human-resource/master-data/work-area.service';

@Component({
  selector: 'app-add-work-area',
  templateUrl: './add-work-area.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/add/add.scss',
    './add-work-area.component.scss'
  ]
})
export class AddWorkAreaComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: WorkAreaService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_id: ['', [Validators.required]],
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
}
