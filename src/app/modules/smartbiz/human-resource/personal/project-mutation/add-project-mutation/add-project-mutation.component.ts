import { Component, OnInit, ElementRef } from '@angular/core';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '@_services/human-resource/master-data/project.service';

@Component({
  selector: 'app-add-project-mutation',
  templateUrl: './add-project-mutation.component.html',
  styleUrls: ['./add-project-mutation.component.scss']
})
export class AddProjectMutationComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: EmployeeService,
    public fb: FormBuilder,

    public project: ProjectService,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_id: ['', [Validators.required]],
        project_id: ['', [Validators.required]],
        mutation_date: ['', [Validators.required]],
        note: [''],
      })
    );
  }

  projectOptions$ = this.project.options$(1, this.company_id);

}
