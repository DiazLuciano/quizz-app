import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../../core/services/notification/notification.service';
import { CreateQuestionnaireService } from '../../services/create-questionnaire.service';

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

  /* METHODS */
  /*============================================================== */

  /**
   * Constructor.
   *
   * @param fb
   */
  constructor(
    private fb: FormBuilder,
    private _createQuestionnaire: CreateQuestionnaireService,
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  /**
   * This method manages the data to save on Questionnaire item from session storage.
   */
  public addQuestionnaire(): void {
    this._createQuestionnaire.titleQuizz = this.form.get('title')?.value;
    this._createQuestionnaire.descriptionQuizz = this.form.get('description')?.value;
  }

}
