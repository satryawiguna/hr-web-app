import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from '@_services/auth/auth.service';
import { BankService } from '@_services/common/bank.service';
import { DegreeService } from '@_services/common/degree.service';
import { GenderService } from '@_services/common/gender.service';
import { MajorService } from '@_services/common/major.service';
import { MaritalStatusService } from '@_services/common/marital-status.service';
import { ReligionService } from '@_services/common/religion.service';
import { OfficeService } from '@_services/human-resource/master-data/office.service';
import { WorkAreaService } from '@_services/human-resource/master-data/work-area.service';
import { dateFormat } from '@_shared-modules/components/input-date/input-date.component';
import List from 'src/app/shared-modules/base/pages/list/list';
import { WorkUnitService } from 'src/app/_services/human-resource/master-data/work-unit.service';
import { EmployeeService } from 'src/app/_services/human-resource/personal/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent extends List {

  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: EmployeeService,
    public authService: AuthService,

    public gender: GenderService,
    public marital_status: MaritalStatusService,
    public major: MajorService,
    public degree: DegreeService,
    public office: OfficeService,
    public work_unit: WorkUnitService,
    public bank: BankService,
    public religion: ReligionService,
    public work_area: WorkAreaService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource',
      authService,
    );
  }

  filter = this.fb.group({
    query: [''],
    company_id: [''],

    gender_id: [''], // select-instant
    marital_status_id: [''], // select-instant

    birth_date_range: [''],
    join_date_range: [''],

    // ? not provided in API yet
    has_bpjs: [false], // checkbox & input-text readonly
    degree_id: [''], // select-instant

    major_id: [''], // select-instant
    project_id: [''], // select-instant

    competence_id: [''], // select-instant
    position_id: [''], // select-instant

    office_id: [''], // select-instant
    work_status: [''], // select-instant

    work_unit_id: [''], // select-instant

  });

  options$ = {
    maritalStatus$: this.marital_status.optionsFromState$(),
    gender$: this.gender.optionsFromState$(),

    major$: this.major.optionsFromState$(),
    degree$: this.degree.optionsFromState$(),

    office$: this.office.optionsFromState$(''),
    workUnit$: this.work_unit.optionsFromState$(''),

    workStatus$: this.store.select(state => state.selectInstantState.workStatus),
  };

  optionsFromAPI$ = [
    this.marital_status.getOptionsFromAPI$(),
    this.gender.getOptionsFromAPI$(),
    this.major.getOptionsFromAPI$(),
    this.degree.getOptionsFromAPI$(),
    this.office.getOptionsFromAPI$('', this.company_id),
    this.work_unit.getOptionsFromAPI$('', this.company_id),

    this.bank.getOptionsFromAPI$(),
    this.religion.getOptionsFromAPI$(),
    this.work_area.getOptionsFromAPI$('', this.company_id),
  ];

  componentName = 'employee';

  columns = {
    action() { return ['selection', 'delete', 'edit', 'detail']; },
    nip(row) {
      return row.nip;
    },
    full_name(row) {
      return row.full_name;
    },
    nick_name(row) {
      return row.nick_name;
    },
    gender_id(row) {
      return row.gender?.[0].name;
    },
    religion_id(row) {
      return row.religion?.[0].name;
    },
    marital_status_id(row) {
      return row.marital_status?.[0].name;
    },
    office_id(row) {
      return row.office?.[0].name;
    },
    location(row) {
      return row.location;
    },
    bank_id(row) {
      return row.bank?.[0].name;
    },
    join_date(row) {
      return dateFormat(row.join_date);
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

  delayedInit = false;

  afterNgOnInit() {
    // delaying add & edit component for faster employee/list opening
    setTimeout(() => {
      this.delayedInit = true;
    }, 1000);
  }
}
