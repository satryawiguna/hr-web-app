import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { ModuleService } from 'src/app/_services/common/module.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-module',
    templateUrl: './edit-module.component.html',
    styleUrls: [
        './edit-module.component.scss',
        '../../../../../shared-modules/base/pages/edit/edit.scss'
    ]
})
export class EditModuleComponent extends Edit {

    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: ModuleService,
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
