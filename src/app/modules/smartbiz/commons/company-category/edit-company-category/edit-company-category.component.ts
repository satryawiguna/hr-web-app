import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { CompanyCategoryService } from 'src/app/_services/common/company-category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-company-category',
    templateUrl: './edit-company-category.component.html',
    styleUrls: [
        './edit-company-category.component.scss',
        '../../../../../shared-modules/base/pages/edit/edit.scss'
    ]
})
export class EditCompanyCategoryComponent extends Edit {

    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: CompanyCategoryService,
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
                description: [''],
            })
        );
    }
}
