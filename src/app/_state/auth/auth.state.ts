import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';

export class Login {
  static readonly type = '[auth] login';
  constructor(
    public payload: AuthStateModel,
  ) { }
}

export class Logout {
  static readonly type = '[auth] Logout';
}
export class RefreshToken {
  static readonly type = '[Auth] Refresh Token';
  constructor(
    public token: any
  ) { }
}

export interface AuthStateModel<T = object, U = object, V = object, W = object, X = object, Y = object> {
  applications: T | null;
  groups: U | null;
  roles: V | null;
  token: W | null;
  user: X | null;
  session?: Y | null;
}

@State<AuthStateModel>({
  name: 'authState',
  defaults: {
    applications: null,
    groups: null,
    roles: null,
    token: null,
    user: null,
    session: null,
  }
})
@Injectable()
export class AuthState {

  @Selector()
  static checkToken(state: AuthStateModel) {
    return state.token !== null;
  }

  @Selector()
  static permissions(state: AuthStateModel) {
    const keys = Object.keys(state.roles);
    return keys.reduce((acc, key) => acc = { ...acc, ...state.roles[key].permissions }, {});
  }

  @Action(RefreshToken)
  refreshTokenReducer({ setState, getState }: StateContext<AuthStateModel>, { token }: RefreshToken) {
    setState(
      produce(
        getState(),
        draft => { draft.token = token; }
      )
    );
  }

  @Action(Login)
  loginReducer({ setState }: StateContext<AuthStateModel>, { payload }: Login) {
    setState(
      {
        ...payload,
        session: null,
      }
    );
  }

  @Action(Logout)
  logout({ setState }: StateContext<AuthStateModel>) {
    setState({
      applications: null,
      groups: null,
      roles: null,
      token: null,
      user: null,
      session: null,
    });
  }
}
