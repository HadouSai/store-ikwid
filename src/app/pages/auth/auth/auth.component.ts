import { Observable, Subscription } from 'rxjs';
import { loged } from './../../../ngrx/reducers/auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/ngrx/reducers/auth/auth.interface';
import { State } from 'src/app/ngrx/reducers/index.reducers';
import { TypeInputs } from 'src/app/utils/inputs/inputs.interface';
import { OwnValidations } from 'src/app/utils/own-validations/own-validations';
import { ResolveValidations } from 'src/app/utils/own-validations/resolve-validations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  readonly username = TypeInputs.email;
  readonly password = 'password';
  readonly placeholderSignIn = 'Email';
  readonly placeholderPassword = 'Password';

  readonly titleLogin = 'Sign Up';
  readonly alreadyAccountText = 'Already have an account?';
  readonly createOrLoginText = `Log in`;
  readonly btnTextLogin = 'Create Account';

  resolveValidations = new ResolveValidations();

  errorMsg = {
    email: '',
    password: '',
  };

  userLoged$: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) {
    this.form = this.buildForm();
    this.userLoged$ = this.store
      .select('authState')
      .subscribe((c) => console.log(c));
  }

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
  get usernameField() {
    return this.form.get(this.username);
  }

  get usernameFieldValid() {
    return this.usernameField?.valid;
  }

  get passwordField() {
    return this.form.get(this.password);
  }

  get passwordFieldValid() {
    return this.passwordField?.valid;
  }

  home() {
    this.router.navigateByUrl('./');
  }

  submitForm(event: Event) {
    event.preventDefault;
    //console.log(this.form);

    this.resolveValidations.basicValidation(this.errorMsg, this.form);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // aca simulo que pedi al servicio algo
    const userAuth: AuthState = {
      email: this.usernameField?.value,
      username: 'loquesea',
      img: '',
      nickname: 'Nickname',
      password: this.passwordField?.value,
      uid: '3',
    };

    this.recreateAsync();

    console.log(this.usernameField);
    this.store.dispatch(loged({ userAuth }));
  }

  recreateAsync = async () =>
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });

  private buildForm() {
    //validaciones sincronas primero que las asincronas
    return this.formBuilder.group({
      email: ['', [Validators.required, OwnValidations.isEmail]],
      password: ['', [Validators.required, OwnValidations.isMinLength]],
    });
    //hacer un validador regex password por el trim() los espacios que me deje
  }
}
