import { TypeInputs } from './../inputs/inputs.interface';

export interface BasicInputsI {
  type: TypeInputs,
  validator: ValidatorInputsI[]
}

export interface ValidatorInputsI {
  nameValidator: string;
  message: string;
}
