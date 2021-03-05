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
import { btnsMedia } from 'src/app/utils/icons/icons-brands/icons-brands';

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

  authMode = true;

  readonly titleLogin = 'Sign Up';
  readonly alreadyAccountText = 'Already have an account?';
  readonly createOrLoginText = `Log in`;
  readonly btnTextLogin = 'Create Account';

  readonly btnsMedia = btnsMedia;

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

  get passwordField() {
    return this.form.get(this.password);
  }

  submitForm(event: Event) {
    event.preventDefault();
    //console.log(this.form);

    this.resolveValidations.basicValidation(this.errorMsg, this.form);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // aca simulo que pedi al servicio algo
    console.log(this.usernameField);
    this.validateLogin();
  }

  private validateLogin() {
    this.recreateAsync();

    //logica si es valido por aca si no crear otro metodo para mostrar error login

    const userAuth: AuthState = {
      email: this.usernameField?.value,
      username: 'loquesea',
      img: '',
      nickname: 'Nickname',
      password: this.passwordField?.value,
      uid: '3',
    };

    this.saveUser(userAuth);
  }

  private saveUser(userAuth: AuthState) {
    this.store.dispatch(loged({ userAuth }));
    // guardar sesion en token en localstorage
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
