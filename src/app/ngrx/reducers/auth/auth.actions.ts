import { createAction, props } from "@ngrx/store";
import { AuthState } from "./auth.interface";

const groupLogin = `[Auth]`;

const LOGED = `${groupLogin} Loged`;

export const loged = createAction(
  LOGED,
  props<{ userAuth: AuthState }>()
);
