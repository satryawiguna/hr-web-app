import { Component, OnInit, ElementRef } from '@angular/core';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { Store } from '@ngxs/store';
import { GenderService } from 'src/app/_services/common/gender.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender } from 'src/app/_models/common/gender';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-gender',
    templateUrl: './add-gender.component.html',
    styleUrls: [
        './add-gender.component.scss',
        '../../../../../shared-modules/base/pages/add/add.scss'
    ]
})
export class AddGenderComponent extends Add {

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
