import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  /** PROPERTIES */
  public isLinear = true;
  public secondForm!: FormGroup;

  /**
   * Constructor.
   *
   * @param formBuilder
   */
  constructor(
    private formBuilder: FormBuilder
  ){

    // Questions & Answers Form
    this.secondForm = this.formBuilder.group({
      title: ['',Validators.required],
      seconds: [15, Validators.required],
      points: [500, Validators.required],
      answer1: this.formBuilder.group({
        title: ['', Validators.required],
        isCorrect: [false, Validators.required]
      }),
      answer2: this.formBuilder.group({
        title: ['', Validators.required],
        isCorrect: [false, Validators.required]
      }),
      answer3: this.formBuilder.group({
        title: '',
        isCorrect: false
      }),
      answer4: this.formBuilder.group({
        title: '',
        isCorrect: false
      }),
    });
  }

  public setSecondForm(form: FormGroup) {
    this.secondForm = form;
    console.log(this.secondForm)
  }

}
