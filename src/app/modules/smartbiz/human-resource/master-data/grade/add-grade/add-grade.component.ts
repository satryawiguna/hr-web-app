import { Component, OnInit, ElementRef } from '@angular/core';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { GradeService } from '@_services/human-resource/master-data/grade.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: GradeService,
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
        description: [''],
      })
    );
  }

}
