import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';

export class AddDatatableRows {
  static readonly type = '[datatable] rows has been added';
  constructor(
    public componentName: string,
    public datatableRows: any[],
  ) { }
}

export class RemoveDatatableRows {
  static readonly type = '[datatable] rows has been removed';
  constructor(
    public componentName: string,
    public datatableRows: any[] = null,
  ) { }
}

export class SetDatatable {
  static readonly type = '[datatable] has been set';
  constructor(
    public componentName: string,
    public rows: unknown[],
    public config: unknown | null = null,
  ) { }
}

export class InverseActiveButton {
  static readonly type = '[datatable] inverse is_active button';
  constructor(
    public componentName: string,
    public id: number,
  ) { }
}

export class CancelInverseActiveButton {
  static readonly type = '[datatable] cancel inverse is_active button';
  constructor(
    public componentName: string,
    public id: number,
  ) { }
}

export interface DatatableStateModel {
  [componentName: string]: {
    config: any;
    rows: any[];
  };
}

@State<DatatableStateModel>({
  name: 'datatableState',
})
@Injectable()
export class DatatableState {

  @Action(SetDatatable)
  setDatatableReducer(
    { getState, setState }: StateContext<DatatableStateModel>,
    { componentName, rows, config }: SetDatatable) {

    if (!config) {
      const configState = getState()[componentName]?.config;
      if (configState) {
        config = { ...configState };
      } else {
        config = null;
      }
    }

    const state = produce(
      getState(),
      draft => { draft[componentName] = { rows, config }; }
    );
    setState(state);
  }

  inverserActiveButton({ getState, setState }, { componentName, id }) {
    const state = getState();
    const index = state[componentName].rows.findIndex((x: any) => x.id === id);
    const { is_active } = state[componentName].rows[index];

    setState(
      produce(
        getState(),
        draft => { draft[componentName].rows[index].is_active = is_active ? 0 : 1; }
      )
    );
  }

  @Action(InverseActiveButton)
  inverseActiveButtonReducer(ctx: StateContext<DatatableStateModel>, action: InverseActiveButton) {
    this.inverserActiveButton(ctx, action);
  }

  @Action(CancelInverseActiveButton)
  cancelInverseActiveButtonReducer(ctx: StateContext<DatatableStateModel>, action: CancelInverseActiveButton) {
    this.inverserActiveButton(ctx, action);
  }

  @Action(AddDatatableRows)
  addDatatableRowsReducer(
    { getState, setState, dispatch }: StateContext<DatatableStateModel>,
    { componentName, datatableRows }: AddDatatableRows,
  ) {
    if (getState()[componentName] === undefined) {
      dispatch(new SetDatatable(componentName, datatableRows, null));
    } else {
      setState(
        produce(
          getState(),
          draft => {
            const { rows, config } = draft[componentName];
            rows.unshift(...datatableRows);
            if (config) {
              config.length += datatableRows.length;
            }

            draft[componentName] = { rows, config };
          }
        )
      );
    }
  }

  @Action(RemoveDatatableRows)
  removeDatatableRowReducer(
    { getState, setState }: StateContext<DatatableStateModel>,
    { componentName, datatableRows }: RemoveDatatableRows,
  ) {
    setState(
      produce(
        getState(),
        draft => {
          let { rows } = draft[componentName];
          const { config } = draft[componentName];

          if (!datatableRows) {
            rows = rows.filter(row => ('id' in row));
            if (config) {
              config.length -= 1;
            }
          } else {
            const ids: number[] = datatableRows.reduce((acc: number[], curr: any) => [...acc, curr.id], []);
            rows = rows.filter(row => !ids.includes(row.id));
            if (config) {
              config.length -= datatableRows.length;
            }
          }


          draft[componentName] = { rows, config };
        }
      )
    );
  }

}
