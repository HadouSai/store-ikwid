import { createAction, props } from "@ngrx/store";
import { TabState } from "./tabs.interface";

const groupTab = '[Tabs]';

const ADD_TAB = `${groupTab} Add`;
const REMOVE_TAB = `${groupTab} remove`;

export const addTab = createAction(
  ADD_TAB,
  props<{ tabState: TabState }>()
);
