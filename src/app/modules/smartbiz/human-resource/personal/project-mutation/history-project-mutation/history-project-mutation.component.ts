import { Component, OnInit, ElementRef } from '@angular/core';
import Add from '@_shared-modules/base/pages/add/add';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import { FormBuilder } from '@angular/forms';
import { dateFormat } from '@_shared-modules/components/input-date/input-date.component';

@Component({
  selector: 'app-history-project-mutation',
  templateUrl: './history-project-mutation.component.html',
  styleUrls: ['./history-project-mutation.component.scss']
})
export class HistoryProjectMutationComponent extends Add {

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: EmployeeService,
    public fb: FormBuilder,

  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({})
    );
  }
  modalBackgroundClass = 'history-modal-background';
  modalHeightVar = '--history-modal-height';
  modalWidthVar = '--history-modal-width';

  modalControl = [];
  modal(modalId) {
    this.modalControl = modalId.split('***');
  }

  columns = {
    action() { return ['selection', 'edit', 'delete']; },
    project(row) {
      return row.project;
    },
    mutation_date(row) {
      return dateFormat(row.mutations?.[row.mutations.length - 1]?.date);
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

}
