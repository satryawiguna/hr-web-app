import { Input } from '@angular/core';
import { SetDatatable } from '@_state';
import { iif, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import Add from '../add/add';

export default class Edit extends Add {

  // for edit component
  @Input() data: number | string = '';

  onSubmit() {
    onSubmitInEditComponent(this);
  }

  ngOnInitInEditComponent() {
    setDetailToForm(this);
  }

}

export const setDetailToForm = (ctx: Add) => {
  const dataFromStore = ctx.store.selectSnapshot(state => state.datatableState[ctx.componentName]);
  ctx.initData = dataFromStore?.rows.find((v: any) => v.id?.toString() === ctx.data);

  if (ctx.initData) {
    // * setting form value with initData from store
    let detail: { [name: string]: any; } = {};
    for (const formName in ctx.form.getRawValue()) {
      if (formName === 'isRequestSlug') {
        // ? bug fix for edit component with [hidden]
        // ? slug requested even though isRequestSlug is uncheck
        detail = { [formName]: false, ...detail };
      } else if (formName === 'media_libraries') {
        // ? used in editEmployeeComponent
        if (ctx.initData.media_libraries?.length > 0) {
          detail[formName] = [
            {
              media_library_id: ctx.initData.media_libraries[0].id,
              pivot: {
                attribute: 'featured'
              }
            }
          ];
        } else {
          detail[formName] = '';
        }
      } else if (formName === 'parent_id') {
        const key = ctx.componentName.split('-').join('_') + '_parent';
        detail[formName] = ctx.initData[key]?.[0]?.id ?? '';
      } else if (formName.includes('_id')) {
        const name = formName.split('_id')[0];
        detail[formName] = ctx.initData[name]?.[0].id || '';
      } else {
        detail[formName] = ctx.initData[formName];
      }
    }

    // ? used in addEmployeeComponent
    // todo: remove, has supplied by add-employee
    if (ctx.local) {
      detail.employee_id = '';
    }

    ctx.form.setValue(detail);
  }
};

export const onSubmitInEditComponent = (ctx: Add) => {
  ctx.form.markAllAsTouched();

  if (ctx.form.valid) {
    ctx.isSubmitted = true;

    const formToSubmit: any = ctx.apiFormAdjustment({ ...ctx.initData, ...ctx.mapFormObjectBeforeSave() });
    const convertedForm = ctx.convertToLocalStore(formToSubmit);

    const prevData = ctx.store.selectSnapshot(state => state.datatableState[ctx.componentName].rows);
    const nextData = prevData.map((row: any) => {
      if (row.id.toString() === ctx.data) {
        row = { ...row, ...convertedForm, modified_by: ctx.username };
      }
      return row;
    });

    ctx.store.dispatch(new SetDatatable(ctx.componentName, nextData));

    ctx.subs.sink = iif(
      () => ctx.local,

      // * use local state to save data
      of({
        message: 'data was saved locally',
      }),

      // * use api to save data
      ctx._service.update(formToSubmit)
    ).pipe(
      tap(
        (res: { message: string; }) => {
          ctx.toastr.success(res.message);
          ctx.afterSubmitSucceed();
          ctx.close();
        },
        (err: { message: string; }) => {
          ctx.toastr.error(err.message, `Something went wrong.... Try again later`);
          ctx.store.dispatch(new SetDatatable(ctx.componentName, prevData));
          ctx.afterSubmitFailed();
        }
      ),
      finalize(() => ctx.isSubmitted = false)
    ).subscribe();

  } else {
    ctx.notifyFormHasErrors();
  }
};
