import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { EmployeeNumberScaleService } from 'src/app/_services/common/employee-number-scale.service';

@Component({
  selector: 'app-add-employee-number-scale',
  templateUrl: './add-employee-number-scale.component.html',
  styleUrls: [
    './add-employee-number-scale.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss'
  ]
})
export class AddEmployeeNumberScaleComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: EmployeeNumberScaleService,
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
        description: [''],
      })
    );
  }
}
