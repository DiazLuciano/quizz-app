import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { IUser } from 'src/core/auth/interfaces/auth.interface';
import { Questionnaire } from '../../models/questionnaire.class';
import { QuizzService } from '../../services/quizz.service';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.class';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  /** PROPERTIES */
  public isLinear = false;
  public firstForm!: FormGroup;
  public secondForm!: FormGroup;
  public questionnaireForm! : FormGroup;


  /** Questionnaire Properties */
  public titleQuizz: string = '';
  public descriptionQuizz: string = '';
  public listQuestions: Question[] = [];

  /**
   * Constructor.
   *
   * @param formBuilder
   */
  constructor(
    private formBuilder: FormBuilder,
    private _quizzService: QuizzService
  ){

    // Second Form - Questions && Answers
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

  /* METHODS */
  /*============================================================== */

  public createQuestionnaire(): void {
    this._quizzService.createQuizz()
  }

  public next(canContinue: boolean, stepper: MatStepper): void {
    if(canContinue) {

      this.titleQuizz = this._quizzService.titleQuizz;
      this.descriptionQuizz = this._quizzService.descriptionQuizz;

      if(this._quizzService.listQuestions?.length > 0) this.listQuestions = this._quizzService.listQuestions;

      stepper.next();
    }
  }

}
