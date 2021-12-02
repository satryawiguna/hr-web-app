import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { OtherEquipmentService } from 'src/app/_services/human-resource/personal/other-equipment.service';

@Component({
  selector: 'app-add-other-equipment',
  templateUrl: './add-other-equipment.component.html',
  styleUrls: ['./add-other-equipment.component.scss']
})
export class AddOtherEquipmentComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: OtherEquipmentService,
    public fb: FormBuilder,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        employee_id: [''],
        name: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
        description: ['', [Validators.required]]
      })
    );
  }

}
