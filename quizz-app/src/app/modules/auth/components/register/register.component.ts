import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /**
   *
   */
  public visibility: boolean = false;

  public changeVisibility() {

    if( this.visibility === true) {
      this.visibility = false;
    } else {
      this.visibility = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
