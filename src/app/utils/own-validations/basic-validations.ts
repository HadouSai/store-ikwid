import { TypeInputs } from './../inputs/inputs.interface';
import { Validators } from "@angular/forms";
import { OwnValidations } from './own-validations';

export default {
  basicInputsV: [{
    type: TypeInputs.email,
    validator: [{
      nameValidator: 'required',
      message: 'Please provide your email.'
    },
    {
      nameValidator: 'email',
      message: ` Hmm, that email address doesn't look right.`
    }]
  }, {
    type: TypeInputs.password,
    validator: [{
      nameValidator: 'required',
      message: 'Please provide your password.'
    },
    {
      nameValidator: 'minlength',
      message: `Please set a password with more than 5 characters.`
    }]
  }]
}

