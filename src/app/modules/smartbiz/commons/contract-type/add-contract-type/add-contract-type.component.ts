import { Store } from '@ngxs/store';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ContractTypeService } from 'src/app/_services/common/contract-type.service';
import { FormBuilder, Validators } from '@angular/forms';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { ContractType } from 'src/app/_models/common/contract-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contract-type',
  templateUrl: './add-contract-type.component.html',
  styleUrls: [
    './add-contract-type.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss'
  ]
})
export class AddContractTypeComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: ContractTypeService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
      })
    );
  }
}
