import { AbstractControl } from '@angular/forms';

export class OwnValidationsAsync {

  static validateEmail(userService: any) {
    return (control: AbstractControl) => {
      const value = control.value;

      //return userService.checkEmail(value).pipe(map(response => { return response.isEmailAvailable ? null : { isEmailAvailable: false } }))
    }
  }


}
