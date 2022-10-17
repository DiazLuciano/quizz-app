import { Component, OnInit } from '@angular/core';

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

  /* PUBLIC METHODS */
  /* -------------------------------------------------------------------*/

  /**
   * This method allows to change the visibility of the password content.
   */
  public changeVisibility() {

    if( this.visibility === true) {
      this.visibility = false;
      this.inputType = 'password';
    } else {
      this.visibility = true;
      this.inputType = 'text';
    }
  }

}