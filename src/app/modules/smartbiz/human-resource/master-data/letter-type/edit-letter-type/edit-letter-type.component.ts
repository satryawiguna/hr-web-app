import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { LetterTypeService } from 'src/app/_services/human-resource/master-data/letter-type.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlphaNumericValidation } from 'src/app/shared-modules/customValidation';

@Component({
    selector: 'app-edit-letter-type',
    templateUrl: './edit-letter-type.component.html',
    styleUrls: [
        '../../../../../../shared-modules/base/pages/edit/edit.scss',
        './edit-letter-type.component.scss'
    ]
})
export class EditLetterTypeComponent extends Edit {


    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: LetterTypeService,
        public fb: FormBuilder,
    ) {
        super(
            toastr,
            el,
            store,
            _service,
            fb.group({
                company_id: ['', [Validators.required]],
                code: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), AlphaNumericValidation]],
                name: ['', [Validators.required]],
                isRequestSlug: [true],
                slug: ['', [Validators.required]],
                description: [''],
            })
        );
    }
}
