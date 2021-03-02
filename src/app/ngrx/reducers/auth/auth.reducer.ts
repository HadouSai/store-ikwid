import { Action, createReducer, on } from '@ngrx/store';
import { loged } from './auth.actions';
import { AuthState } from './auth.interface';

const initialState: AuthState = {
  email: '',
  nickname: '',
  password: '',
  uid: '',
  username: '',
  img: '',
};

const userAuthReducer = createReducer(
  initialState,
  on(loged, (state) => state)
);

export function reducer(state: AuthState | undefined, action: Action) {
  return userAuthReducer(state, action);
}
