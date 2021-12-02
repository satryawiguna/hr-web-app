import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { MaritalStatusService } from 'src/app/_services/common/marital-status.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-marital-status',
    templateUrl: './edit-marital-status.component.html',
    styleUrls: [
        './edit-marital-status.component.scss',
        '../../../../../shared-modules/base/pages/edit/edit.scss'
    ]
})
export class EditMaritalStatusComponent extends Edit {

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
