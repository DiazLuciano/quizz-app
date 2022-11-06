import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  /* PROPERTIES */
  /* -------------------------------------------------------------------*/

  /**
   * Property that manage the loading spinner.
   */
  public loading: boolean = false;

  /**
   * Property that manages the visibility of the input password.
   */
  public visibility: boolean = false;

  /**
   *  Property that manages the type of the input password.
   */
  public inputType: string = 'password';

  /**
   * Property that represents the register form data.
   */
  public form: FormGroup;

  /**
   * Constructor
   */
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    },
    {
      validator: this.checkPasswords
    }
    );
  }

  /* PUBLIC METHODS */
  /* -------------------------------------------------------------------*/

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

  public checkPasswords(form: FormGroup) {

    const pass = form.get('password')?.value;
    const repeatPassword = form.get('repeatPassword')?.value;

    return pass === repeatPassword ? null : { notSame: true };
  }

}
