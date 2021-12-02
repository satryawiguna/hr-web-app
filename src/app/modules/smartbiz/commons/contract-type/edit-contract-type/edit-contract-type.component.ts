import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { ContractTypeService } from 'src/app/_services/common/contract-type.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-contract-type',
    templateUrl: './edit-contract-type.component.html',
    styleUrls: [
        './edit-contract-type.component.scss',
        '../../../../../shared-modules/base/pages/edit/edit.scss'
    ]
})
export class EditContractTypeComponent extends Edit {

    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: ContractTypeService,
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
            })
        );
    }
}
