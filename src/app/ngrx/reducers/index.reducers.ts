import { AuthState } from './auth/auth.interface';
import { ActionReducerMap } from '@ngrx/store';
import { TabState } from './tabs/tabs.interface';
import * as tabReducer from './tabs/tabs.reducer';
import * as authReducer from './auth/auth.reducer';

export interface State {
  tabState: TabState;
  authState: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  tabState: tabReducer.reducer,
  authState: authReducer.reducer,
};
