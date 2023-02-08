import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPreUser } from 'src/core/auth/interfaces/auth.interface';
import { AuthUserService } from '../services/auth/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /** Properties */
  public loading: boolean = false;
  public visibility: boolean = false;
  public inputType: string = 'password';
  public form: FormGroup;
  public preUser!: IPreUser;

  /**
   * Constructor
   */
  constructor(
    private formBuilder: FormBuilder,
    private _authUserService: AuthUserService,
    private _router: Router
    ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    },
    {
      validator: this.checkPasswords
    }
    );
  }

  /* METHODS */
  /* -------------------------------------------------------------------*/

  /**
 * This method checks if both inputs passwords are same.
 * @param form
 * @returns
 */
  private checkPasswords(form: FormGroup) {
    const pass = form.get('password')?.value;
    const repeatPassword = form.get('repeatPassword')?.value;
    return pass === repeatPassword ? null : { notSame: true };
  }

  /**
   * This method allows to change the visibility of the password content.
   */
  public passwordVisibility() {
    if( this.visibility === true) {
      this.visibility = false;
      this.inputType = 'password';
    } else {
      this.visibility = true;
      this.inputType = 'text';
    }
  }

  /**
   * This method manage the register form for the new user.
   */
  public register(): void {
    this.loading = true;

    this.preUser = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }

    this._authUserService.signUp(this.preUser).then( () => {
      this._router.navigate(['auth/verify']);
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => { this.loading = false; });
  }
}
