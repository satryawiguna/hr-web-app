import { Component, OnInit, ElementRef } from '@angular/core';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkUnitService } from '@_services/human-resource/master-data/work-unit.service';

@Component({
  selector: 'app-add-work-unit-mutation',
  templateUrl: './add-work-unit-mutation.component.html',
  styleUrls: ['./add-work-unit-mutation.component.scss']
})
export class AddWorkUnitMutationComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: EmployeeService,
    public fb: FormBuilder,

    public workUnit: WorkUnitService,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_id: ['', [Validators.required]],
        work_unit_id: ['', [Validators.required]],
        mutation_date: ['', [Validators.required]],
        note: [''],
      })
    );
  }

  workUnitOptions$ = this.workUnit.options$(1, this.company_id);

}
