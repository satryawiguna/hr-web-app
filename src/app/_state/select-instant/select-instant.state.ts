import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';

export class AddSelectInstant {
  static readonly type = '[selectInstant] Selection Added';
  constructor(
    public apiName: string,
    public selectionRows: SelectInstantModel[]
  ) { }
}
export class CompareSelectInstant {
  static readonly type = '[selectInstant] Compared';
  constructor(
    public apiName: string,
    public selectionRows: SelectInstantModel[]
  ) { }
}
export interface SelectInstantModel {
  id: string | number;
  name: string;
}

export interface selectInstantStateModel {
  [apiName: string]: SelectInstantModel[];
}

@State<selectInstantStateModel>({
  name: 'selectInstantState',
  defaults: {
    status: [
      { id: '', name: 'All' },
      { id: '1', name: 'Active' },
      { id: '0', name: 'Not Active' },
    ],
    bpjsClass: [
      { id: '', name: 'All' },
      { id: 'I', name: 'Class I' },
      { id: 'II', name: 'Class II' },
      { id: 'III', name: 'Class III' },
    ],
    npwpStatus: [
      { id: '', name: 'All' },
      { id: 'TK/0', name: 'TK/0' },
      { id: 'TK/1', name: 'TK/1' },
      { id: 'TK/2', name: 'TK/2' },
      { id: 'TK/3', name: 'TK/3' },
      { id: 'K/0', name: 'K/0' },
      { id: 'K/1', name: 'K/1' },
      { id: 'K/2', name: 'K/2' },
      { id: 'K/3', name: 'K/3' },
      { id: 'KI/0', name: 'KI/0' },
      { id: 'KI/1', name: 'KI/1' },
      { id: 'KI/2', name: 'KI/2' },
      { id: 'KI/3', name: 'KI/3' },
    ],
    mateAs: [
      { id: '', name: 'All' },
      { id: 'HUSBAND', name: 'Husband' },
      { id: 'WIFE', name: 'Wife' }
    ],
    workStatus: [
      { id: '', name: 'All' },
      { id: 'FULL_TIME', name: 'Full Time' },
      { id: 'PART_TIME', name: 'Part Time' },
    ],
    workType: [
      { id: '', name: 'All' },
      { id: 'CONTRACT', name: 'Contract' },
      { id: 'PERMANENT', name: 'Permanent' },
    ],
    officeType: [
      { id: '', name: 'All' },
      { id: 'HEAD', name: 'Head' },
      { id: 'BRANCH', name: 'Branch' }
    ],
    accessValue: [
      { id: '', name: 'All' },
      { id: 'ALLOW', name: 'Allow' },
      { id: 'DENY', name: 'Deny' },
    ]
  }
})
@Injectable()
export class selectInstantState {

  @Action(AddSelectInstant)
  addSelectInstantReducer(
    { getState, setState }: StateContext<selectInstantStateModel>,
    { apiName, selectionRows }: AddSelectInstant) {

    // store is not initiated yet
    if (!getState()[apiName]) {
      setState(
        produce(
          getState(),
          draft => { draft[apiName] = selectionRows; }
        )
      );
    } else {
      setState(
        produce(
          getState(),
          draft => {
            const draftIds = draft[apiName].reduce((acc, val) => [...acc, val.id], []);
            draft[apiName] = [...draft[apiName], ...selectionRows.filter(v => !draftIds.includes(v.id))];
          }
        )
      );
    }
  }

  @Action(CompareSelectInstant)
  compareSelectInstantReducer(
    { getState, dispatch }: StateContext<selectInstantStateModel>,
    { apiName, selectionRows }: CompareSelectInstant) {
    const state = getState();
    if (state[apiName] === undefined || JSON.stringify(state[apiName]) !== JSON.stringify(selectionRows)) {
      dispatch(new AddSelectInstant(apiName, selectionRows));
    }
  }

}
