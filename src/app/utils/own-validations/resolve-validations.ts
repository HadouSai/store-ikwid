import { FormGroup } from '@angular/forms';
import basicValidations from './basic-validations';
import { BasicInputsI } from './validations-i.interface';

export class ResolveValidations {

  basicField: BasicInputsI | undefined = undefined;

  /**
   * Make Messages Errors and true for FromField Error.
   * @param obj: Objeto que contendra el string de los mensajes
   * @param param1: Form para comparar y setear los mensajes
   */
  basicValidation(obj: any, { controls }: FormGroup) {
    if (!controls || !obj) return;

    for (const key in controls) {

      if (!controls[key].errors) {
        obj[key] = '';
        continue;
      }

      this.basicField = basicValidations.basicInputsV.find(field => field.type === key);

      if (!this.basicField) return;

      const msgError = this.basicField.validator.find(c => controls[key].errors?.[c.nameValidator]);

      //console.log(msgError)

      if (!msgError) {
        obj[key] = '';
        continue;
      }

      obj[key] = msgError.message;
    }
  }
}

