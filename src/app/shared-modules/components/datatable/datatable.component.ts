import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { AddDatatableRows, AuthState, CancelInverseActiveButton, InverseActiveButton, RemoveDatatableRows, SetDatatable } from '@_state';
import { ToastrService } from 'ngx-toastr';
import { iif, merge, Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth/auth.service';
import AutoUnsubscribe from '../../base/pages/auto-unsubscribe/auto-unsubscribe';
import { DialogComponent } from '../dialog/dialog.component';
import { ErrorHandlerService } from './../../../_services/errorHandler.service';
import { RestApiService } from './../../base/services/rest-api.service';
import { inputToBoolean } from './../../reusableRxjsPipe';
import { apiDateFormat, dateFormat } from './../input-date/input-date.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent extends AutoUnsubscribe implements AfterViewInit, OnInit {


  @Select() datatableState$: Observable<unknown[]>;
  accessRules;
  /**
   * id is used in multiple datatable in one page
   * if only one datatable in page then don't use it
   */
  @Input() id = '';

  @Input() filter: FormGroup | null = null;
  @Input() columns: { [title: string]: (arg?: any) => string; };
  actionButton: string | string[] = ['selection', 'edit', 'delete', 'detail', 'status'];
  @Input() service: RestApiService;
  @Input() returnUrl = '';
  @Input('datatable-state') componentName = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 100;
  pageIndex = 0;
  pageSize = 10;

  @ViewChild(MatSort) sort: MatSort;
  active = 'id';
  direction = 'desc';

  @Output() openModal = new EventEmitter();
  @Input() filterNav = null;

  @Input() datatable = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  pageSizeOptions: number[] = [10, 20, 50];
  isStored = true;
  dummyData = [];
  isLoadingResults = true;
  displayedColumns: Array<string>;
  filterList: Array<string> = [];
  filterHandler$: Array<Observable<any>> = [];
  errorMessage = '';
  @Input('hide-add-button') hideAddButton;
  @Input('hide-bulk-button') hideBulkButton;
  @Input('hide-export-button') hideExportButton;
  @Input('hide-filter-button') hideFilterButton;

  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    public authService: AuthService,
    public http: HttpClient,
    public err: ErrorHandlerService,
    public store: Store,
  ) {
    super();
  }

  /**
   * check Whether the number of selected elements matches the total number of rows.
   */
  checkboxIsAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datatable.data.length;
    return numRows > 0 ? numSelected === numRows : false;
  }

  /**
   * Selects all rows if they are not all selected; otherwise clear selection.
   */
  checkboxMasterToggle() {
    this.checkboxIsAllSelected() ?
      this.selection.clear() :
      this.datatable.data.forEach(row => this.selection.select(row));
  }

  /**
   * @param row? :string
   * The label for the checkbox on the passed row.
   */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.checkboxIsAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @param filterList: Array<string>
   * Observable that control how to detect changes in reactiveFormControl
   */
  getFilterHandler(filterList: Array<string>) {
    return filterList.map(
      filterName => {
        let filterHandler: Observable<any>;
        switch (filterName) {

          // case for input filter min 3 character & debounce time 250 ms
          case 'query':
            filterHandler = this.filter.get('query').valueChanges.pipe(
              map(v => v === null ? '' : v),
              filter((val: string) => val.length > 2 || val.length === 0),
              debounceTime(250),
              distinctUntilChanged());
            break;

          // default case for selection filter
          default:
            filterHandler = this.filter.get(filterName).valueChanges;

        }
        return filterHandler;
      }
    );
  }


  /**
   * @param row : object
   * handle Delete button
   */
  buttonDelete(row: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: `Delete ${this.componentName}`,
        body: `Are you sure you want to delete "${row.full_name || row.name || row.title}" ${this.componentName} ?`,
        btnYes: `Delete`,
        btnNo: `Cancel`
      },
    });

    const prevData = this.datatable.data;
    const removedRows = prevData.filter((val: any) => val.id === row.id);

    const deletion$ = iif(() => this.filter !== null,
      this.service.delete(row.id),
      of({ message: 'local data was deleted' })
    );
    dialogRef.afterClosed().pipe(
      take(1),
      filter(res => res === true),
      tap(() => {
        this.isLoadingResults = true;
        this.store.dispatch(new RemoveDatatableRows(this.componentName, removedRows));
      }),
      switchMap(() => deletion$.pipe(
        tap(
          (res: any) => {
            this.toastr.success(res.message);
            if (this.datatable.data.length === 0 && this.filter !== null) {
              const filterValues = this.filter.getRawValue();
              this.filter.setValue(filterValues);
            }
          },
          (err: any) => {
            console.log(err);
            this.store.dispatch(new AddDatatableRows(this.componentName, removedRows));
            this.toastr.error(err.message, `Something went wrong.... Try again later`);
          },
          () => this.isLoadingResults = false),
      ))).subscribe();
  }

  @Input('extra') extraDetail$: any = [null];
  /**
   * @param row : object
   * handle Delete button
   */
  buttonDetail(row: { [name: string]: string | any[]; }) {
    const notIncludedInDetail = ['id', 'media_libraries'];
    const detail = Object.keys(row)
      .filter(value => !notIncludedInDetail.includes(value))
      .map((value: string) => {
        if (value === 'name') {
          return [this.componentName.split('_').join(' ').split('-').join(' ') + ' name', row[value]];
        }
        if (value.includes('_at')) {
          return [value, dateFormat(row[value])];
        }
        if (Array.isArray(row[value])) {
          return [value, row[value][0]?.name || '-'];
        }
        return [value, row[value]];
      });

    // show extra detail in permission & role component
    if (this.extraDetail$[0] !== null) {
      const key = Object.keys(this.extraDetail$)[0];
      detail.push([key, this.extraDetail$[key](row.id)]);
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        type: 'detail',
        detail,
        title: `detail ${this.componentName.split('-').join(' ')}`,
      },
    });
  }

  /**
   * @param row : object
   * handle activation & deactivation
   */
  buttonActivation({ id, is_active }) {
    this.store.dispatch(new InverseActiveButton(this.componentName, id));
    // * below service will non cancellable  to prevent failing optimistic request
    this.service.activate({ id, is_active: is_active ? 0 : 1 }).pipe(
      take(1),
      tap(
        (res: any) => this.toastr.success(res.message),
        (err: any) => {
          this.store.dispatch(new CancelInverseActiveButton(this.componentName, id));
          this.toastr.error(err.message, `Something went wrong.... Try again later`);
        })
    ).subscribe();
  }

  buttonBulkDelete() {
    if (!this.selection.hasValue()) {
      this.dialog.open(DialogComponent, {
        width: '500px',
        data: {
          title: `Warning`,
          body: `There is no item selected`,
        },
      });
      return;
    }

    const ids = this.selection.selected.map(val => val.id);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: `Delete ${this.componentName}`,
        body: `You will lost these ${ids.length} data item. Are you sure you want to delete it?`,
        btnYes: `Delete`,
        btnNo: `Cancel`
      },
    });

    const prevData = this.datatable.data;
    const removedRows = prevData.filter((val: any) => ids.includes(val.id));

    const deletion$ = iif(() => this.filter !== null,
      this.service.deletes(ids),
      of({ message: 'local data was deleted' })
    );

    dialogRef.afterClosed().pipe(
      take(1),
      filter(res => res === true),
      tap(() => {
        this.selection.clear();
        this.store.dispatch(new RemoveDatatableRows(this.componentName, removedRows));
      }),
      switchMap(() => deletion$.pipe(
        tap(
          (res: any) => {
            if (this.datatable.data.length === 0 && this.filter !== null) {
              const filterValues = this.filter.getRawValue();
              this.filter.setValue(filterValues);
            }
            this.toastr.success(res.message);
          },
          (err: any) => {
            console.log(err);
            this.toastr.error(err.message, `Something went wrong.... Try again later`);
            this.store.dispatch(new AddDatatableRows(this.componentName, removedRows));
          }),
      ))).subscribe();
  }

  buttonExport(exportType: string) {
    this.service.export({ ...this.filter.value, export: exportType }).pipe(
      tap(
        res => this.service.saveBlob(res, this.componentName),
        (err: any) => {
          console.log(err);
          this.toastr.error(err.message, `Something went wrong.... Try again later`);
        }),
    ).subscribe();
  }

  buttonRefreshDatatable() {
    this.authService.triggerChange('Refresh Datatable');
  }

  /**
   *
   * @param modalId : string
   * event emitter to @Output
   */
  open(modalId) {
    const body = document.body;
    body.style.overflowY = 'hidden';
    this.openModal.emit(modalId);
  }

  datatableError(msg: string) {
    this.isStored = false;
    this.isLoadingResults = false;

    switch (msg) {
      case 'empty':
        this.errorMessage = 'No records found';
        break;

      case 'server':
        this.errorMessage = 'Something went wrong.... Try again later';
        break;

      default:
        this.errorMessage = '';
        break;
    }
  }

  checkAccessRules(method: string) {
    let isAllowed;

    // * bypass rules if datatable is in addcomponent
    if (this.id === '') {
      isAllowed = this.accessRules[method].value === 'ALLOW' ? true : false;
    } else {
      isAllowed = true;
    }
    return isAllowed;
  }

  ngOnInit() {
    this.hideAddButton = inputToBoolean(this.hideAddButton);
    this.hideBulkButton = inputToBoolean(this.hideBulkButton);
    this.hideExportButton = inputToBoolean(this.hideExportButton);
    this.hideFilterButton = inputToBoolean(this.hideFilterButton);

    if (this.id === '') {
      this.accessRules = this.store.selectSnapshot(AuthState.permissions)['manage-' + this.componentName].accesses;
    } else {
      // ? service for datatable in add / edit employee
      this.service = new RestApiService(this.http, this.err);
      let httpRoute = this.id;

      // ? change name of component to fit FE UI designer
      if (this.id.includes('institution')) {
        httpRoute = this.id.split('-institution').join('-education-history');
      }
      if (this.id.includes('organization')) {
        httpRoute = this.id + '-history';
      };
      this.service.httpRoute = '/' + httpRoute;
      this.id = '-' + this.id;
    }

    // * connecting ngxs datatable.store to datatable.data
    this.subs.sink = this.datatableState$.pipe(
      tap(val => {
        if (val[this.componentName] !== undefined) {
          const { config } = val[this.componentName];

          if (config) {
            // * paginator state
            this.length = config.length;
            this.pageSize = config.pageSize;
            this.pageIndex = config.pageIndex;

            // *sort state
            this.active = config.active;
            this.direction = config.direction;

            this.datatableError(config.datatableError);
          }
        }
      }),
      map(val => val[this.componentName] !== undefined ? val[this.componentName].rows : []),
      tap(rows => {
        this.datatable.data = rows.filter((v, i) => i < this.pageSize);
      }),
    ).subscribe();

    this.displayedColumns = Object.keys(this.columns);
    if (this.displayedColumns.includes('action')) {
      this.actionButton = this.columns.action();
      if (this.actionButton.length === 0) {
        this.displayedColumns.shift();
      }
    } else {
      this.displayedColumns.unshift('action');
    }

    if (this.filter !== null) {
      this.filterList = Object.keys(this.filter.getRawValue());
      this.filterHandler$ = this.getFilterHandler(this.filterList);
    } else {
      this.datatableError('empty');
      this.pageSize = 100;
    }

    for (let index = 1; index <= 5; index++) {
      this.dummyData.push({ y: (50 * index) + 7, randomWidth: Math.floor(Math.random() * 100) });
    }
  }

  ngAfterViewInit() {

    // * datatable change detection observable
    let datatableMutationSource$ = merge(

      // * change in filter form
      ...this.filterHandler$,

      // * change in sorting datatable
      this.sort.sortChange.pipe(
        tap(() => this.paginator.pageIndex = 0),
      ),

      // * change in pagintor selection
      this.paginator.page,

      // * change in session token
      this.authService.watchChange(),
    );

    // * load data if previous data stored in datatable.store
    // * or in editEmployeeComponent
    if (this.isStored || (this.id !== '' && this.filter !== null)) {
      datatableMutationSource$ = datatableMutationSource$.pipe(
        startWith({}),
      );
    }

    const getConfig = (ctx, err = '') => {
      const { length, pageSize, pageIndex } = ctx.paginator;
      const { direction, active } = ctx.sort;
      const datatableError = err;

      return {
        length, pageSize, pageIndex, direction, active, datatableError
      };
    };

    const getDataFromApi$ = this.filterList.length === 0 ? of('') : datatableMutationSource$.pipe(
      switchMap(() => {

        const filterValues = this.filter.getRawValue();
        if (!this.isStored) {
          this.isLoadingResults = true;
        }

        let filterParams = {
          query: {
            value: this.filter.get('query').value || null
          },
          pagination: {
            page: this.paginator.pageIndex + 1,
            perpage: this.paginator.pageSize,
          },
          sort: {
            sort: this.sort.direction || 'asc',
            field: this.sort.active,
          }
        };

        Object.keys(filterValues).forEach(
          filterName => {
            if (filterValues[filterName] && filterName !== 'query') {
              if (filterName.includes('range')) {
                const paramName = filterName.split('_range')[0];
                filterParams = {
                  ...filterParams,
                  ['start_' + paramName]: apiDateFormat(filterValues[filterName].begin),
                  ['end_' + paramName]: apiDateFormat(filterValues[filterName].end),
                };
              } else {
                filterParams = {
                  ...filterParams,
                  [filterName]: filterValues[filterName]
                };
              }
            }
          }
        );
        return this.service.pageSearch(filterParams).pipe(
          map((res: any) => {
            this.isStored = false;
            this.datatableError('');

            this.paginator.length = res.meta.total;

            const config = getConfig(this, this.paginator.length > 0 ? '' : 'empty');

            const { rows } = res;

            return { rows, config };
          }),
          catchError(() => {
            const config = getConfig(this, 'server');
            return of({ rows: [], config });
          }),
          tap(({ rows, config }) => this.store.dispatch(new SetDatatable(this.componentName, rows, config))),
        );
      })
    );

    this.subs.sink = iif(() => this.filter !== null, getDataFromApi$).subscribe();
  }
}
