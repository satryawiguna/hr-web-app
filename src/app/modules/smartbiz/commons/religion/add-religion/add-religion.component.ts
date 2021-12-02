import { Component, OnInit, ElementRef } from '@angular/core';
import { ReligionService } from 'src/app/_services/common/religion.service';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { FormBuilder, Validators } from '@angular/forms';
import { Religion } from 'src/app/_models/common/religion';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-add-religion',
  templateUrl: './add-religion.component.html',
  styleUrls: [
    './add-religion.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss'
  ]
})
export class AddReligionComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: ReligionService,
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
