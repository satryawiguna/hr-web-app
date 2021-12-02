import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateFormDirty, UpdateFormValue } from '@ngxs/form-plugin';
import { Store } from '@ngxs/store';
import { BankService } from '@_services/common/bank.service';
import { GenderService } from '@_services/common/gender.service';
import { ReligionService } from '@_services/common/religion.service';
import { OfficeService } from '@_services/human-resource/master-data/office.service';
import { WorkAreaService } from '@_services/human-resource/master-data/work-area.service';
import { EmployeeService } from '@_services/human-resource/personal/employee.service';
import Add from '@_shared-modules/base/pages/add/add';
import { removeOptionAll } from '@_shared-modules/reusableRxjsPipe';
import { SetDatatable } from '@_state';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs/operators';
import { AlphaNumericValidation, NumericValidation, PhoneNumberValidation } from 'src/app/shared-modules/customValidation';
import { MaritalStatusService } from 'src/app/_services/common/marital-status.service';
import { ChildColumns } from '../child/child.component';
import { FormalEducationHistoryColumns } from '../formal-education-history/formal-education-history.component';
import { NonFormalEducationHistoryColumns } from '../non-formal-education-history/non-formal-education-history.component';
import { OrganizationHistoryColumns } from '../organization-history/organization-history.component';
import { WorkCompetenceColumns } from '../work-competence/work-competence.component';
import { WorkExperienceColumns } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: [
    './add-employee.component.scss'
  ]
})
export class AddEmployeeComponent extends Add {

  selectedTab = new FormControl(0);
  lengthTab = 6;
  firstTab = true;
  lastTab = false;
  filterDatatables: FormGroup;

  childPredefinedForm = {
    employee_id: ''
  };

  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: EmployeeService,
    public fb: FormBuilder,

    public marital_status: MaritalStatusService,
    public gender: GenderService,
    public religion: ReligionService,
    public work_area: WorkAreaService,
    public office: OfficeService,
    public bank: BankService,
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group(EmployeeForm)
    );

    this.subs.sink = this.selectedTab.valueChanges.subscribe(index => {
      if (index === 0) {
        this.firstTab = true;
        this.lastTab = false;
      } else if (index === this.lengthTab - 1) {
        this.firstTab = false;
        this.lastTab = true;
        this.firstTab = false;
      } else {
        this.firstTab = false;
        this.lastTab = false;
      }
    });

    Object.keys(this.datatableColumns).forEach(key => { delete this.datatableColumns[key].employee_name; });
    this.filterDatatables = this.fb.group({ query: '', employee_id: '' });
  }

  multiModalControl = [];
  checkboxes$ = EmployeeCheckboxes$(this);
  datatableColumns = EmployeeDatatableColumns;
  options$ = EmployeeOptions$(this);

  modalBackgroundClass = 'employee-modal-background';
  modalHeightVar = '--employee-modal-height';
  modalWidthVar = '--employee-modal-width';

  // * min-date & max-date for drive license A, B, C
  todayDate = new Date();
  next5YearsDate = new Date(this.todayDate.getFullYear() + 5, this.todayDate.getMonth(), this.todayDate.getDate());

  prevTab() {
    if (this.selectedTab.value == 2 && this.checkMaritalStatus) {
      this.selectedTab.setValue(this.selectedTab.value - 2);
    } else {
      this.selectedTab.setValue(this.selectedTab.value - 1);
    }
  }

  nextTab() {
    if (this.selectedTab.value == 0 && this.checkMaritalStatus) {
      this.selectedTab.setValue(this.selectedTab.value + 2);
    } else {
      this.selectedTab.setValue(this.selectedTab.value + 1);
    }
  }

  multiModal(modalId) {
    this.multiModalControl = modalId.split('***');
  }

  mapFormObjectBeforeSave() {
    const transformedObject: any = { ...this.form.getRawValue() };

    if (!this.initData) {
      const datatableState = this.store.selectSnapshot(state => state.datatableState);
      transformedObject.childs = datatableState['child']?.rows ?? [];
      transformedObject.formal_education_histories = datatableState['formal-institution']?.rows ?? [];
      transformedObject.non_formal_education_histories = datatableState['non-formal-institution']?.rows ?? [];
      transformedObject.organization_histories = datatableState['organization']?.rows ?? [];
      transformedObject.work_competences = datatableState['work-competence']?.rows ?? [];
      transformedObject.work_experiences = datatableState['work-experience']?.rows ?? [];
      transformedObject.other_equipments = [];
    } else {
      transformedObject.id = this.initData.id;
      transformedObject.company_id = this.company_id;
    }

    // TODO: remove this when employee api fixed
    transformedObject.identity_expired_date = transformedObject.birth_date;
    return transformedObject;
  }

  beforeNgOnInit() {

    const enableFamilyForm = (value: boolean) => {
      const familyForm = [
        this.form.get('mate_full_name'),
        this.form.get('mate_nick_name'),
        this.form.get('mate_birth_place'),
        this.form.get('mate_birth_date'),
        this.form.get('has_mate_bpjs_kesehatan'),
        this.form.get('mate_bpjs_kesehatan_number'),
        this.form.get('mate_bpjs_kesehatan_date'),
        this.form.get('mate_bpjs_kesehatan_class'),
      ];
      if (value) {
        familyForm.forEach(form => form.enable());
      } else {
        familyForm.forEach(form => {
          form.disable();
          form.reset('');
        });
        this.form.get('has_mate_bpjs_kesehatan').reset(false);
      }
    };

    this.subs.sink = this.form.get('marital_status_id').valueChanges.pipe(
      map(value => value !== '' && value !== 1 ? true : false),
      tap(enableFamilyForm),
    ).subscribe();

    this.form.get('mate_as').disable();
    this.subs.sink = this.form.get('gender_id').valueChanges.pipe(
      tap(gender_id => this.form.get('mate_as').setValue(gender_id === 1 ? 'WIFE' : 'HUSBAND')),
    ).subscribe();
  }

  afterSubmitSucceed() {
    const datatableState = this.store.selectSnapshot(state => state.datatableState);
    for (const key in datatableState) {
      if (
        [
          'child',
          'formal-institution',
          'non-formal-institution',
          'organization',
          'work-competence',
          'work-experience'
        ].includes(key)
      ) {
        this.store.dispatch(new SetDatatable(key, []));
      }

      this.store.dispatch(
        new UpdateFormDirty({
          dirty: false,
          path: 'formState.employee'
        })
      );
      this.store.dispatch(
        new UpdateFormValue({
          value: this.initFormValue,
          path: 'formState.employee'
        })
      );
    }
  }

  get checkMaritalStatus() {
    const value = this.form.get("marital_status_id").value;
    return value === '' || value == 1;
  }
}

const EmployeeForm = {
  company_id: ['', [Validators.required]],

  nip: ['', [Validators.required]],
  full_name: ['', [Validators.required]],
  nick_name: ['', [Validators.required]],
  gender_id: ['', [Validators.required]],
  religion_id: ['', [Validators.required]],
  birth_place: ['', [Validators.required]],
  birth_date: ['', [Validators.required]],
  address: ['', [Validators.required]],
  phone: ['', [NumericValidation]],
  mobile: ['', [Validators.required, Validators.minLength(10), PhoneNumberValidation]],
  email: ['', [Validators.required, Validators.email]],
  identity_number: ['', [Validators.required, NumericValidation, Validators.minLength(16), Validators.maxLength(16)]],
  identity_address: ['', [Validators.required]],
  has_drive_license_a: [false, [Validators.required]],
  drive_license_a_number: ['', [Validators.required, AlphaNumericValidation, Validators.minLength(12), Validators.maxLength(14)]],
  drive_license_a_date: ['', [Validators.required]],
  has_drive_license_b: [false, [Validators.required]],
  drive_license_b_number: ['', [Validators.required, AlphaNumericValidation, Validators.minLength(12), Validators.maxLength(14)]],
  drive_license_b_date: ['', [Validators.required]],
  has_drive_license_c: [false, [Validators.required]],
  drive_license_c_number: ['', [Validators.required, AlphaNumericValidation, Validators.minLength(12), Validators.maxLength(14)]],
  drive_license_c_date: ['', [Validators.required]],

  marital_status_id: ['', [Validators.required]],
  mate_as: ['HUSBAND'],
  mate_full_name: ['', [Validators.required]],
  mate_nick_name: ['', [Validators.required]],
  mate_birth_place: ['', [Validators.required]],
  mate_birth_date: ['', [Validators.required]],
  has_mate_bpjs_kesehatan: [false, [Validators.required]],
  mate_bpjs_kesehatan_number: ['', [Validators.required, NumericValidation, Validators.minLength(11), Validators.maxLength(11)]],
  mate_bpjs_kesehatan_date: ['', [Validators.required]],
  mate_bpjs_kesehatan_class: ['', [Validators.required]],

  has_npwp: [false, [Validators.required]],
  npwp_number: ['', [Validators.required, NumericValidation, Validators.minLength(15), Validators.maxLength(15)]],
  npwp_date: ['', [Validators.required]],
  npwp_status: ['', [Validators.required]],
  has_bpjs_tenaga_kerja: [false, [Validators.required]],
  bpjs_tenaga_kerja_number: ['', [Validators.required, NumericValidation, Validators.minLength(11), Validators.maxLength(11)]],
  bpjs_tenaga_kerja_date: ['', [Validators.required]],
  bpjs_tenaga_kerja_class: ['', [Validators.required]],
  has_bpjs_kesehatan: [false, [Validators.required]],
  bpjs_kesehatan_number: ['', [Validators.required, NumericValidation, Validators.minLength(11), Validators.maxLength(11)]],
  bpjs_kesehatan_date: ['', [Validators.required]],
  bpjs_kesehatan_class: ['', [Validators.required]],
  dplk_number: ['', [Validators.required, NumericValidation, Validators.minLength(3), Validators.maxLength(50)]],
  collective_number: ['', [Validators.required, NumericValidation, Validators.minLength(3), Validators.maxLength(50)]],

  work_area_id: ['', [Validators.required]],
  office_id: ['', [Validators.required]],
  join_date: ['', [Validators.required]],
  english_ability: ['', [Validators.required]],
  computer_ability: ['', [Validators.required]],
  other_ability: ['', [Validators.required]],
  work_status: ['FULL_TIME', [Validators.required]],
  work_type: ['CONTRACT', [Validators.required]],
  media_libraries: [[], [Validators.required]],
  bank_id: ['', [Validators.required]],
  account_number: ['', [Validators.required, NumericValidation, Validators.minLength(3), Validators.maxLength(20)]],
};

const EmployeeOptions$ = (ctx: {
  store: Store,
  marital_status: MaritalStatusService,
  gender: GenderService,
  religion: ReligionService,
  work_area: WorkAreaService,
  office: OfficeService,
  bank: BankService,
  company_id: number | '',
}) => ({
  // * get select option from api & state
  bank$: ctx.bank.optionsFromState$(1),
  gender$: ctx.gender.optionsFromState$(1),
  religion$: ctx.religion.optionsFromState$(1),
  maritalStatus$: ctx.marital_status.optionsFromState$(1),
  workArea$: ctx.work_area.optionsFromState$(1),
  office$: ctx.office.optionsFromState$(1),

  // * get select option from state
  bpjsTenagaKerjaClass$: ctx.store.select(state => state.selectInstantState.bpjsClass).pipe(removeOptionAll),
  bpjsKesehatanClass$: ctx.store.select(state => state.selectInstantState.bpjsClass).pipe(removeOptionAll),
  mateAs$: ctx.store.select(state => state.selectInstantState.mateAs).pipe(removeOptionAll),
  npwpStatus$: ctx.store.select(state => state.selectInstantState.npwpStatus).pipe(removeOptionAll),
  workStatus$: ctx.store.select(state => state.selectInstantState.workStatus).pipe(removeOptionAll),
  workType$: ctx.store.select(state => state.selectInstantState.workType).pipe(removeOptionAll),
});

const EmployeeDatatableColumns = {
  child: { ...ChildColumns },
  formalEducationHistory: { ...FormalEducationHistoryColumns },
  nonFormalEducationHistory: { ...NonFormalEducationHistoryColumns },
  organizationHistory: { ...OrganizationHistoryColumns },
  workCompetence: { ...WorkCompetenceColumns },
  workExperience: { ...WorkExperienceColumns },
};

const EmployeeCheckboxes$ = (ctx: { form: FormGroup; }) => ({
  cbHasMateBpjsKesehatan: [
    ctx.form.get('mate_bpjs_kesehatan_number'),
    ctx.form.get('mate_bpjs_kesehatan_date'),
    ctx.form.get('mate_bpjs_kesehatan_class'),
  ],
  cbHasLicenseA: [
    ctx.form.get('drive_license_a_number'),
    ctx.form.get('drive_license_a_date'),
  ],
  cbHasLicenseB: [
    ctx.form.get('drive_license_b_number'),
    ctx.form.get('drive_license_b_date'),
  ],
  cbHasLicenseC: [
    ctx.form.get('drive_license_c_number'),
    ctx.form.get('drive_license_c_date'),
  ],
  cbHasNPWP: [
    ctx.form.get('npwp_number'),
    ctx.form.get('npwp_status'),
    ctx.form.get('npwp_date'),
  ],
  cbHasBpjsKerja: [
    ctx.form.get('bpjs_tenaga_kerja_number'),
    ctx.form.get('bpjs_tenaga_kerja_class'),
    ctx.form.get('bpjs_tenaga_kerja_date'),
  ],
  cbHasBpjsKesehatan: [
    ctx.form.get('bpjs_kesehatan_number'),
    ctx.form.get('bpjs_kesehatan_date'),
    ctx.form.get('bpjs_kesehatan_class'),
  ],
});
