import { Component, OnInit, ElementRef } from '@angular/core';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { Store } from '@ngxs/store';
import { MaritalStatusService } from 'src/app/_services/common/marital-status.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MaritalStatus } from 'src/app/_models/common/marital-status';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-marital-status',
    templateUrl: './add-marital-status.component.html',
    styleUrls: [
        './add-marital-status.component.scss',
        '../../../../../shared-modules/base/pages/add/add.scss'
    ]
})
export class AddMaritalStatusComponent extends Add {

    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: MaritalStatusService,
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
