import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Store } from '@ngxs/store';
import { concat, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, finalize, map, switchMap, tap } from 'rxjs/operators';
import AutoUnsubscribe from '../../base/pages/auto-unsubscribe/auto-unsubscribe';
import { RestApiService } from '../../base/services/rest-api.service';
import { ErrorHandlerService } from './../../../_services/errorHandler.service';
import { AddSelectInstant } from './../../../_state/select-instant/select-instant.state';

@Component({
  selector: 'app-select-api',
  templateUrl: './select-api.component.html',
  styleUrls: ['./select-api.component.scss']
})
export class SelectApiComponent extends AutoUnsubscribe implements OnInit {
  @Input() formName: FormGroup;
  @Input() name: string;
  @Input() label: string;

  selected: string;
  options$;
  loading = false;
  typeInput$ = new Subject<string>();
  labelToUse: string;
  service = new RestApiService(this.http, this.err);
  company_id = this.store.selectSnapshot(state => state.authState.user.companies)[0].id ?? '';
  isDisabled;

  constructor(
    public store: Store,
    public http: HttpClient,
    public err: ErrorHandlerService,
    public fb: FormBuilder,
    private config: NgSelectConfig) {
    super();
    this.config.notFoundText = 'Not found';
  }

  changeData(obj = { id: '' }) {
    if (obj.id === '') {
      this.formName.get(this.name).reset();
    }
    this.formName.get(this.name).setValue(obj.id);
  }

  ngOnInit(): void {
    this.isDisabled = this.formName.get(this.name).disabled;
    this.service.httpRoute = '/' + this.name.split('_').filter(v => v !== 'id').join('-');

    // value to use as option label in select elements
    switch (this.name) {
      case 'employee_id':
        this.labelToUse = 'full_name';
        break;

      case 'work_unit_id':
      case 'work_area_id':
        this.labelToUse = 'title';
        break;

      default:
        this.labelToUse = 'name';
        break;
    }

    let getDefault = of([]);

    if (this.formName.get(this.name).value !== '') {
      this.selected = this.formName.get(this.name).value;
      console.log('selected', this.selected);
      this.loading = true;

      let dataFromStoreSelected = [];
      const dataFromStore = this.store.selectSnapshot(state =>
        state.selectInstantState[this.name.split('_id')[0] + '1']);
      if (dataFromStore) {
        dataFromStoreSelected = dataFromStore.filter(v => v.id === this.selected);
      }

      const apiEndpoint = ['country', 'country_id'].includes(this.name) ?
        this.service.listSearch({ alpha_two_code: this.selected }).pipe(
          map((v: any) => v.rows[0]),
          map((v: any) => ({ id: v.alpha_two_code, name: v.name })),
        ) :
        this.service.detail(Number(this.selected));

      const dataFromAPI$ = apiEndpoint.pipe(
        map(res => ([res])),
        catchError(() => of([])), // empty list on error
        tap((val: any[]) => val.length === 0 ? [] : this.store.dispatch(
          new AddSelectInstant(this.name.split('_id')[0] + '1',
            dataFromStore ? [...dataFromStore, ...val] : val))),
        tap(() => this.loading = false)
      );

      if (dataFromStoreSelected.length > 0) {
        getDefault = of(dataFromStoreSelected);
      } else {
        getDefault = dataFromAPI$;
      }
    }

    this.options$ = concat(
      getDefault,
      this.typeInput$.pipe(
        debounceTime(250),
        distinctUntilChanged(),
        tap(() => this.loading = true),
        switchMap(query => {
          const params: { query: string, company_id?: number | string; } = { query };

          if (this.name !== 'company_id') {
            params.company_id = this.company_id;
          }

          return this.service.listSearch(params).pipe(
            // mapping selected value in row.id
            map(({ rows }: any) => {
              if (this.name === 'country_id' || this.name === 'country') {
                return rows.map((row: any) => {
                  row.id = row.alpha_two_code;
                  return row;
                });
              } else {
                return rows;
              }
            }),
            tap(val => this.store.dispatch(
              new AddSelectInstant(this.name.substring(0, this.name.length - 3) + '1', val))),
            catchError(() => of([])), // empty list on error
            finalize(() => this.loading = false)
          );
        })
      )
    );
  }

}
