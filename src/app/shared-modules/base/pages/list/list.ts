import { OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from '@_services/auth/auth.service';
import { merge, Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import AutoUnsubscribe from '../auto-unsubscribe/auto-unsubscribe';
import { RestApiService } from './../../services/rest-api.service';

export default class List extends AutoUnsubscribe implements OnInit {
  constructor(
    public store: Store,
    public _router: Router,
    public _service: RestApiService,
    public returnUrl: string,
    public authService?: AuthService,
  ) {
    super();
  }

  @ViewChild('filters', { static: true }) filter_nav;
  componentName = '';
  modalControl = [];
  filter: FormGroup;
  statusOptions$ = this.store.select(state => state.selectInstantState.status);


  role = this.store.selectSnapshot(state => state.authState.roles);
  user = this.store.selectSnapshot(state => state.authState.user);
  username: string = this.user.username;
  company_id: number | '' = this.user.companies[0]?.id || '';

  isSuperAdmin = superAdminChecker(this.role);

  optionsFromAPI$: Observable<any>[] = [];

  modal(modalId) {
    this.modalControl = modalId.split('***');

    // uncomment for refresh datatable after save / edit
    // if (this.modalControl[0] === 'close') {
    //   this.filter.setValue(this.filter.value);
    // }
  }

  setCompanyId() {
    this.filter.get('company_id').setValue(this.company_id);
  }


  /**
   * ? fetch options list after datatable successfully initialized
   */
  initializeSelectOptions() {

    this.subs.sink = merge(
      /**
       * get option immediately after page open
       */
      // of(''),

      /**
       * get options if token refreshed
       */
      this.authService.watchChange(),

      /**
       * get options after datatable initiated
       */
      this.store.select(state => state.datatableState[this.componentName]).pipe(
        filter(val => val !== undefined),
        take(1),
      ),
    ).pipe(
      tap(() => {
        this.optionsFromAPI$.forEach(obs$ => this.subs.sink = obs$.pipe(take(1)).subscribe());
      })
    ).subscribe();
  }

  /**
   * Overridable function
   */
  afterNgOnInit() { }

  ngOnInit() {
    if (!this.isSuperAdmin && ('company_id' in this.filter.getRawValue())) {
      this.setCompanyId();
    }

    if (this.optionsFromAPI$.length > 0) {
      this.initializeSelectOptions();
    }

    this.afterNgOnInit();

  }

}

export const superAdminChecker = (roles) => {
  return ('super-admin' in roles);
};
