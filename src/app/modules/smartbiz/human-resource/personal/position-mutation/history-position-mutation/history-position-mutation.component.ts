import { Component, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import Add from '@_shared-modules/base/pages/add/add';
import { dateFormat } from '@_shared-modules/components/input-date/input-date.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history-position-mutation',
  templateUrl: './history-position-mutation.component.html',
  styleUrls: ['./history-position-mutation.component.scss']
})
export class HistoryPositionMutationComponent extends Add {

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
    position(row) {
      return row.position;
    },
    grade(row) {
      return row.grade;
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
