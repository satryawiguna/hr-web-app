import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { GenderService } from 'src/app/_services/common/gender.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-gender',
    templateUrl: './edit-gender.component.html',
    styleUrls: [
        './edit-gender.component.scss',
        '../../../../../shared-modules/base/pages/edit/edit.scss'
    ]
})
export class EditGenderComponent extends Edit {

    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: GenderService,
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
