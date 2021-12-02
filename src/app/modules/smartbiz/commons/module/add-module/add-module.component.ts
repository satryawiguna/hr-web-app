import { Store } from '@ngxs/store';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ModuleService } from 'src/app/_services/common/module.service';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/_models/common/module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: [
    './add-module.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss'
  ]
})
export class AddModuleComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: ModuleService,
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
        description: ['']
      })
    );
  }
}
