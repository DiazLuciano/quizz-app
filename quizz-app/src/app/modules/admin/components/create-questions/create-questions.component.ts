import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent {


  /**
   * PROPERTIES
   */
  public canContinue: boolean = false;
  public form: FormGroup;

  /** Slider Properties */
  public disabled = false;
  public max = 1000;
  public min = 0;
  public step = 50;

  /* GETTERS */
  /*============================================================== */
  /**
   * Get Seconds
   */
  public get seconds() { return this.form.get('seconds')?.value; };

  /**
   * Get Score
   */
  public get score() { return this.form.get('score')?.value; };

  /**
   * OUTPUT
   * Form's declaretion.
   */
  @Output() secondForm = new EventEmitter<FormGroup>();

  /**
   * Constructor.
   *
   * @param formBuilder
   */
   constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ['',Validators.required],
      seconds: [15, Validators.required],
      score: [500, Validators.required],
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

  /* METHODS */
  /*============================================================== */
  /**
   * OUTPUT - Emits the Form.
   *
   * @param form An instance of FormGroup.
   */
  public setSecondForm(form: FormGroup) {
    this.secondForm.emit(form);
  }

  /**
   * Method manages the second's value from the minus/plus buttons.
   */
  public addSubstractSeconds(num: number) {

    if(this.seconds <= 5) {

      if(this.seconds == 5 && num < 0) {
        return;
      }
    }

    if(this.seconds == 60 && num > 0) {
      return
    }

    this.form.patchValue({
      seconds: this.seconds + num
    });
  }

  public saveData(): void {
    this.setSecondForm(this.form);
    this.canContinue = true;
  }
}
