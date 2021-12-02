import { Router } from '@angular/router';
import { BankService } from './../../../../../_services/common/bank.service';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { FormBuilder, Validators } from '@angular/forms';
import { Bank } from 'src/app/_models/common/bank';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: [
    '../../../../../shared-modules/base/pages/add/add.scss',
    './add-bank.component.scss'
  ]
})
export class AddBankComponent extends Add {
  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: BankService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group(BankForm)
    );
  }
}

export const BankForm = {
  name: ['', [Validators.required]],
  isRequestSlug: [true],
  slug: ['', [Validators.required]],
  description: [''],
};
