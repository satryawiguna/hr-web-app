import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { PositionService } from 'src/app/_services/human-resource/master-data/position.service';

@Component({
  selector: 'app-add-position-mutation',
  templateUrl: './add-position-mutation.component.html',
  styleUrls: ['./add-position-mutation.component.scss']
})
export class AddPositionMutationComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: EmployeeService,
    public fb: FormBuilder,

    public position: PositionService,
    // TODO: change to grade service
    public grade: PositionService,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_id: ['', [Validators.required]],
        position_id: ['', [Validators.required]],
        grade_id: ['', [Validators.required]],
        mutation_date: ['', [Validators.required]],
        note: [''],
      })
    );
  }

  positionOptions$ = this.position.options$(1, this.company_id);
  gradeOptions$ = this.grade.options$(1, this.company_id);

}
