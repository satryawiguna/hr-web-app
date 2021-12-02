import { CompareSelectInstant, SelectInstantModel } from '@_state';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';


export const mapToRows = pipe(
  map((res: any) => res.rows),
);

export const addOptionAll = pipe(
  map((res: any) => {
    res.unshift({ id: '', name: 'All' });
    return res;
  }),
);

export const removeOptionAll = pipe(
  map((res: any) => {
    if (res !== undefined) {
      return res.filter(row => row.name !== 'All');
    }
    return res;
  }),
);

export const selectInstantDispatcher = (store, selectInstantLabel) => pipe(
  tap((res: SelectInstantModel[]) => {
    store.dispatch(new CompareSelectInstant(selectInstantLabel, res));
  }),
);

export const inputToBoolean = (params: '' | undefined) => params === '';
