import { AbstractControl } from '@angular/forms';
import RegexValidators from './regex-validators';

export class OwnValidations {

  static isYounger(control: AbstractControl) {
    const value = control.value;
    if (value < 18) {
      return { isYounger: true };
    }
    // si todo bien retorno null
    return null;
  }

  static isEmail(control: AbstractControl) {
    const value = control.value;
    return value.match(RegexValidators.isEmail) ? null : { email: true };
  }

  static isPassword(control: AbstractControl) {
    const value = control.value;
    return value.match(RegexValidators.isPassword) ? null : { password: true };
  }

  static isMinLength(control: AbstractControl) {
    const value = control.value;
    return value.trim().length > 5 ? null : { minlength: true };
  }

  // Funciones personaliszadas con parametros
  // Closures
  static isYoungerWithParams(limit: number) {
    return (control: AbstractControl) => {
      const value = control.value;

      if (value < limit) {
        return { isYounger: true };
      }
      // si todo bien retorno null
      return null;
    }
  }


}
