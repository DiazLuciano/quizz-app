import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/core/auth/interfaces/auth.interface';
import { QuizzService } from '../../services/quizz.service';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent {
  /**
   * PROPERTIES
  */
 public form: FormGroup;
 public user: IUser;
 @Output() public nextStep: EventEmitter<boolean> = new EventEmitter();

  /* METHODS */
  /*============================================================== */

  /**
   * Constructor.
   *
   * @param fb
   */
  constructor(
    private fb: FormBuilder,
    private _quizzService: QuizzService,
  ) {

    // Get the data user.
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  /**
   * This method manages the data to save on Questionnaire item from session storage.
   */
  public addQuestionnaire(): void {
    this.nextStep.emit(true);
    this._quizzService.uid = this.user.uid;
    this._quizzService.titleQuizz = this.form.get('title')?.value;
    this._quizzService.descriptionQuizz = this.form.get('description')?.value;
    this._quizzService.showSuccessNotification();
  }

}
