import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent {

  /**
   * PROPERTIES
   */
  public canContinue: boolean = false;
  public form: FormGroup;

  /**
   * OUTPUT - FormGroup
   */
  @Output() firstForm = new EventEmitter<FormGroup>();

  /* METHODS */
  /*============================================================== */
  /**
   * OUTPUT - Emits the Form.
   *
   * @param form An instance of FormGroup.
   */
  public setFirstForm(form: FormGroup) {
    this.firstForm.emit(form);
  }

  /**
   * Constructor.
   *
   * @param fb
   */
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  /**
   * This method manages the data to save on Questionnaire item from session storage.
   */
  public addQuestion(): void {

    // if(this.form.invalid && this.allAnswersFalse()) {
    //   return;
    // }

    // const
    this.setFirstForm(this.form);
    this.canContinue = true;
  }

  public setOtherAnswersFalse(): void {

  }

  public thisAnswerIsCorrect(answer: string): void {
    const answers = ['ans1', 'ans2', 'ans3', 'ans4'];

    for (let index = 0; index < answers.length; index++) {
      const element = answers[index];

    }
  }
}
