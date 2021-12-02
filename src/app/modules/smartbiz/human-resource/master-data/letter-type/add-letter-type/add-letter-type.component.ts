import { Component, ElementRef } from '@angular/core';
import { LetterTypeService } from 'src/app/_services/human-resource/master-data/letter-type.service';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlphaNumericValidation } from 'src/app/shared-modules/customValidation';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-add-letter-type',
  templateUrl: './add-letter-type.component.html',
  styleUrls: [
    '../../../../../../shared-modules/base/pages/add/add.scss',
    './add-letter-type.component.scss'
  ]
})
export class AddLetterTypeComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: LetterTypeService,
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
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        description: [''],
      })
    );
  }
}
