import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInputs, TypeInputs } from './inputs.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true
    }
  ]
})
export class InputsComponent implements OnInit, ControlValueAccessor {

  @Input() type: IInputs = TypeInputs.text;
  @Input() placeholder: string = '';
  @Input() height: string = '44px';
  @Input() showValidations = true;
  @Input() errorMsg: string = '';

  onChange = (_: any) => { }; // Registro del metodo RegisterOnChande
  onTouch = () => { }; // Registro del metodo onTouch

  currentValue = '';
  isDisabled: boolean = false;

  basicValidationField = null;

  constructor() { }

  ngOnInit(): void {
    // password performance problem with this showValidations
  }

  onInput(value: any) {
    //console.log(this.fieldForm);
    if(!value || !value.value) return;

    this.currentValue = value.value;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  // Escribe el valor en el componente por si viene un valor
  writeValue(value: IInputs): void {
    if (value) {
      this.currentValue = value;
    }
  }

  /** Recibe un callback function que sera llamada cuando cambie el valor
  puede ser externo o interno */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  readonly setHeight = () => this.isString(this.height) ? this.showValidations ? `calc(${this.height} + 26px)` : this.height : '44px';

  readonly isString = (string: string) => string && typeof string === 'string' && string.trim().length > 0;

}
