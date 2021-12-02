import { Component, OnInit, ElementRef } from '@angular/core';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { Store } from '@ngxs/store';
import { CompanyCategoryService } from 'src/app/_services/common/company-category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyCategory } from 'src/app/_models/common/company-category';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-company-category',
    templateUrl: './add-company-category.component.html',
    styleUrls: [
        './add-company-category.component.scss',
        '../../../../../shared-modules/base/pages/add/add.scss'
    ]
})
export class AddCompanyCategoryComponent extends Add {

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
