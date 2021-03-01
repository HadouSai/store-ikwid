
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationErrorsService {

  constructor(private _snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this._snackBar.open(message);
    //alert('Succes' + message)
  }

  showError(message: string): void {
    // The second parameter is the text in the button.
    // In the third, we send in the css class for the snack bar.
    this._snackBar.open(message, 'X', {
      panelClass: ['error'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
    //alert('Error Controler from service' + message)
  }
}
