import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { TabState } from './tabs/tabs.interface';
import * as tabReducer from './tabs/tabs.reducer';

export interface State {
  tabState: TabState;
}

export const reducers: ActionReducerMap<State> = {
  tabState: tabReducer.reducer,
};
