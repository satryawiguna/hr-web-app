import { Component, OnInit } from '@angular/core';
import List from '@_shared-modules/base/pages/list/list';
import { Store } from '@ngxs/store';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import { ProjectService } from '@_services/human-resource/master-data/project.service';
import { dateFormat } from '@_shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-project-mutation',
  templateUrl: './project-mutation.component.html',
  styleUrls: ['./project-mutation.component.scss']
})
export class ProjectMutationComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: EmployeeService,
    public project: ProjectService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource',
    );
  }

  filter = this.fb.group({
    query: [''],
    company_id: [''],
    project: [''],
    mutation_range: [''],
  });

  componentName = 'project-mutation';

  columns = {
    action() { return ['history']; },
    nip(row) {
      return row.nip;
    },
    full_name(row) {
      return row.full_name;
    },
    last_project(row) {
      return row.mutations?.[row.mutations.length - 1]?.project;
    },
    last_mutation_date(row) {
      return dateFormat(row.mutations?.[row.mutations.length - 1]?.date);
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

  optionsProject$ = this.project.options$('', this.company_id);

}
