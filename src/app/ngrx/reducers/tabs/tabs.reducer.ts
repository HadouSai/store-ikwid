import { createReducer, on, Action } from '@ngrx/store';
import { addTab } from './tabs.actions';
import { TabState } from './tabs.interface';

const initialState: TabState = {
  name: 'uno',
  code: 1,
  path: '/',
};

const tabReducer = createReducer(
  initialState,
  on(addTab, (state, { tabState }) => ({ ...state, ...tabState }))
);

export function reducer(state: TabState | undefined, action: Action) {
  return tabReducer(state, action);
}
