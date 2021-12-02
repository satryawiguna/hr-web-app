import { Component, OnInit, ElementRef } from '@angular/core';
import Edit from 'src/app/shared-modules/base/pages/edit/edit';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionService } from 'src/app/_services/human-resource/master-data/position.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-position',
    templateUrl: './edit-position.component.html',
    styleUrls: [
        '../../../../../../shared-modules/base/pages/edit/edit.scss',
        './edit-position.component.scss'
    ]
})
export class EditPositionComponent extends Edit {


    constructor(
        public toastr: ToastrService,
        public el: ElementRef,
        public store: Store,
        public _service: PositionService,
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
