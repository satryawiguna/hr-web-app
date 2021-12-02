import { ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { inputToBoolean } from '@_shared-modules/reusableRxjsPipe';
import { AddDatatableRows, RemoveDatatableRows } from '@_state';
import { ToastrService } from 'ngx-toastr';
import { iif, merge, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap } from 'rxjs/operators';
import AutoUnsubscribe from 'src/app/shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';
import { superAdminChecker } from '../list/list';
import { CompareSelectInstant } from './../../../../_state/select-instant/select-instant.state';
import { apiDateFormat } from './../../../components/input-date/input-date.component';
import { RestApiService } from './../../services/rest-api.service';

export default class Add extends AutoUnsubscribe implements OnInit, OnChanges {
  constructor(
    public toastr: ToastrService,
    public element: ElementRef,
    public store: Store,
    public _service: RestApiService,
    public form: FormGroup,
  ) {
    super();
    this.beforeNgOnInit();
    this.initFormValue = this.form.getRawValue();
  }

  @Input('datatable-state') componentName: string;
  @Input('width') modalWidth = '500px';
  @Input('height') modalHeight = '500px';

  modalBackgroundClass = 'modal-background';
  modalHeightVar = '--modal-height';
  modalWidthVar = '--modal-width';

  @Input('local') local;
  @Output() closeModal = new EventEmitter();

  // for edit component
  @Input() data: number | string = '';
  initData = null;

  // ? define form initial data from outside of component
  @Input('predefined-form') predefinedForm = null;

  isSubmitted = false;
  role = this.store.selectSnapshot(state => state.authState.roles);
  user = this.store.selectSnapshot(state => state.authState.user);
  username: string = this.user.username;
  company_id: number | '' = this.user.companies[0]?.id || '';
  initFormValue;

  formAccess;
  formPermission;
  selectInstant$: string[] = [];

  isSuperAdmin = superAdminChecker(this.role);

  // togle slug form based on isRequestSlug checkbox
  toggleSlugForm(value: boolean) {
    if (value) {
      this.form.get('slug').disable();
    } else {
      this.form.get('slug').enable();
    }
  }

  // slug method switcher to define endpoint to get slug
  slugMethod() {
    if (this.form.value.hasOwnProperty('title')) {
      return this._service.slug('', this.form.get('company_id').value, this.form.get('title').value);
    }
    if (this.form.value.hasOwnProperty('company_id')) {
      return this._service.slug(this.form.get('name').value, this.form.get('company_id').value);
    }
    return this._service.slug(this.form.get('name').value);
  }

  // observable source of slug request
  slugSource() {
    const slugSource$ = [this.form.get('isRequestSlug').valueChanges];
    if (this.form.value.hasOwnProperty('name')) {
      slugSource$.push(this.form.get('name').valueChanges);
    }
    if (this.form.value.hasOwnProperty('title')) {
      slugSource$.push(this.form.get('title').valueChanges);
    }
    if (this.form.value.hasOwnProperty('company_id')) {
      slugSource$.push(this.form.get('company_id').valueChanges);
    }
    return merge(...slugSource$);
  }

  // method to retrieve slug from name field
  setSlugFromName() {
    this.toggleSlugForm(true);
    this.subs.sink = this.form.get('isRequestSlug').valueChanges.pipe(
      tap((value: boolean) => this.toggleSlugForm(value))
    ).subscribe();

    const formField = this.form.value.hasOwnProperty('name') ? 'name' : 'title';

    this.subs.sink = this.slugSource().pipe(
      filter(() => this.form.get('isRequestSlug').value === true),
      map(() => this.form.get(formField).value),
      filter(val => val !== null),
      filter(val => val.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isSubmitted = true),
      switchMap(() => this.slugMethod().pipe(
        finalize(() => this.isSubmitted = false),
        map((v: any) => v.slug),
        catchError(() => of('e-' + this.form.get(formField).value.split(' ').join('-') + '-' + Math.floor(Math.random() * 1000000))))),
    ).subscribe(v => this.form.get('slug').setValue(v));
  }

  mapFormObjectBeforeSave() {
    const transformedObject: object = { ...this.form.getRawValue() };
    return transformedObject;
  }

  // * automatically add company_id in form
  // * triggered when user not super admin
  setCompanyId() {
    this.form.get('company_id').setValue(this.company_id);
    const { id, name } = this.store.selectSnapshot(state => state.authState.user.companies)[0];
    this.store.dispatch(new CompareSelectInstant('company1', [{ id, name }]));
  }
  /**
   * Overridable function
   */
  beforeNgOnInit() { }
  /**
   * Overridable function
   */
  afterNgOnInit() { }
  /**
   * Overridable function
   */
  ngOnInitInEditComponent() { }

  afterSubmitSucceed() { }
  afterSubmitFailed() { }
  ngOnChanges() {
    this.ngOnInitInEditComponent();
  }

  ngOnInit() {
    this.local = inputToBoolean(this.local);

    document.documentElement.style.setProperty(this.modalWidthVar, this.modalWidth);
    document.documentElement.style.setProperty(this.modalHeightVar, this.modalHeight);

    if (!this.isSuperAdmin && ('company_id' in this.form.getRawValue())) {
      this.setCompanyId();
    }

    if (this.predefinedForm) {
      for (const key in this.predefinedForm) {
        this.form.get(key).setValue(this.predefinedForm[key]);
      }
    }


    // close modal on background click
    this.element.nativeElement.addEventListener('click', el => {
      if (el.target.className === this.modalBackgroundClass) {
        this.cancel();
      }
    });

    // slug field handler
    if (this.form.value.hasOwnProperty('isRequestSlug')) {
      this.setSlugFromName();
    }

    this.afterNgOnInit();
  }

  public cancel() {
    // TODO: make dialog box before close
    this.enableScroll();
    this.closeModal.emit('cancel');
  }

  public close() {
    this.enableScroll();
    this.closeModal.emit('close');
  }

  public convertToLocalStore(obj) {
    const localStoreData = { ...obj };
    if (this.local && !('id' in localStoreData)) {
      const fakeId = 'fakeId-' + Date.now();
      localStoreData.id = fakeId;
    }

    const dataFromStore = this.store.selectSnapshot(state => state.selectInstantState);
    for (const key in localStoreData) {
      if (key === 'parent_id') {
        const storeKey = this.componentName.split('-').join('_');
        localStoreData[storeKey + '_parent'] = localStoreData.parent_id !== '' ?
          dataFromStore[storeKey + '1'].filter(row => row.id === localStoreData[key]) :
          null;
      }
      if (key.includes('_id') && !key.includes('_ids') && !['company_id', 'employee_id', 'parent_id'].includes(key)) {
        const storeKey = key.split('_id')[0];
        localStoreData[storeKey] = dataFromStore[storeKey + '1'].filter(row => row.id === localStoreData[key]);
      }
    }
    return localStoreData;
  }

  enableScroll() {
    const body = document.body;
    body.style.overflowY = '';
  }

  notifyFormHasErrors() {
    const err = [];
    Object.keys(this.form.value).forEach(name => {
      if (this.form.get(name).errors !== null) {
        err.push(name.split('_id').join('').split('_').join(' '));
      }
    });
    this.toastr.error(err.join(', '), 'Some field has error');
  }

  apiFormAdjustment(formToSubmit) {
    if (formToSubmit.hasOwnProperty('isRequestSlug')) {
      delete formToSubmit.isRequestSlug;
    }
    /** handle create permission
     * manipulate access_ids form_data
     */
    if (formToSubmit.hasOwnProperty('access_ids')) {
      const arr_access = [];
      this.formAccess.forEach(element => {
        const temp = [];
        temp.push(element.value.data_ids, element.value.data_value);
        arr_access.push(temp);
      });
      formToSubmit.access_ids = [];
      formToSubmit.access_ids.push(arr_access);
    }
    /** handle create role
     * manipulate permission_ids form_data
     */
    if (formToSubmit.hasOwnProperty('permission_ids')) {
      const arr_permission = [];
      this.formPermission.forEach(element => {
        const temp = [];
        temp.push(element.value.data_ids, element.value.data_value);
        arr_permission.push(temp);
      });
      formToSubmit.permission_ids = [];
      formToSubmit.permission_ids.push(arr_permission);
    }

    for (const key in formToSubmit) {

      /** handle form with date
       * manipulate value from moment format into api format
       */
      if (key.includes('date')) {
        formToSubmit[key] = apiDateFormat(formToSubmit[key]);
      } else
        /**
         * transform value '' to value null
         */
        if (formToSubmit[key] === '') {
          formToSubmit[key] = null;
        }


    }

    return formToSubmit;
  }

  onSubmit(saveAndClose: boolean = false) {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.isSubmitted = true;

      const formToSubmit: any = this.apiFormAdjustment({ ...this.mapFormObjectBeforeSave() });
      const convertedForm = this.convertToLocalStore(formToSubmit);

      this.store.dispatch(new AddDatatableRows(this.componentName, [{ ...convertedForm, created_by: this.username }]));

      this.subs.sink = iif(
        () => this.local,

        // * use local state to save data
        of({
          message: 'data was saved locally',
        }),

        // * use api to save data
        this._service.create(formToSubmit)
      ).pipe(
        tap(
          (res: { message: string, data?: { id: number; }; }) => {
            this.toastr.success(res.message);
            // check if response has data
            if (res.data?.id) {
              const id = res.data.id;
              this.store.dispatch(new RemoveDatatableRows(this.componentName, [convertedForm]));
              this.store.dispatch(new AddDatatableRows(this.componentName, [{ ...convertedForm, id }]));
            }

            this.form.reset();

            this.afterSubmitSucceed();

            if (saveAndClose) {
              this.close();
            }

          },
          (err: { message: string, data?: { id: number; }; }) => {
            console.error(err);
            this.toastr.error(err.message, `Something went wrong.... Try again later`);
            this.store.dispatch(new RemoveDatatableRows(this.componentName, [convertedForm]));
            this.afterSubmitFailed();
          }
        ),
        finalize(() => this.isSubmitted = false)
      ).subscribe();
    } else {
      this.notifyFormHasErrors();
    }
  }

}

