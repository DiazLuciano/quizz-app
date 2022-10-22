import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { InputType } from './login.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /** PROPERTIES */
  /* -------------------------------------------------------------------*/

  /**
   * Property that manages the spinner' status.
   */
  public loading: boolean = false;

  /**
   * Property that manages the forms data.
   */
  public form: FormGroup;

  /**
   * Property that manages the status of the input password visibility.
   */
  public visibility: boolean = false;

  /**
   * Property binding, that manages the type of the input password.
   */
  public inputType: InputType = 'password';

  /**
   * Constructor.
   *
   * @param _authService service that manages the calls to the authentication's methods.
   * @param _toastr service that manages the alerts of toastr library.
   * @param _router service that manages the routing component.
   * @param fb class that allows the building of a form with the data inputs.
   */
  constructor(
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router,
    private fb: FormBuilder
    ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
   }

  /** PUBLIC METHODS */
  /* -------------------------------------------------------------------*/

  /**
   * This method manage the data on the inputs to make a request to login to firebase.
   */
  public login(): void {

    // Show loading spinner.
    this.loading = true;

    // Get the input data.
    const credentialsToValidate = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }

    // Call to fire service sign in.
    this._authService.signIn(credentialsToValidate.email, credentialsToValidate.password).then( (res) => {

      console.log(res);
      this.cleanForm();
      this._router.navigate(['/admin']);

    }).catch( (error) => {

      this._toastr.error('An Error Has Ocurred', 'Oops')
      console.log(error);

    }).finally( () => {
      this.loading = false;
    });
  }

  /**
   * This method manage the visibility of the input password, through the eye icon.
   */
  public passwordVisibility(): void {

    if(this.visibility === true) {
      this.inputType = 'password';
      this.visibility = false;
    } else {
      this.inputType = 'text';
      this.visibility = true;
    }
  }

  /** PRIVATE METHODS */
  /* -------------------------------------------------------------------*/

  /**
   * This private method cleans the Form Group.
   */
  private cleanForm():void {
    this.form.reset();
  }

}
