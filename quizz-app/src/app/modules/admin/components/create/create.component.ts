import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/core/auth/interfaces/auth.interface';
import { Questionnaire } from '../../models/questionnaire.class';
import { QuizzService } from '../../services/quizz.service';

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

  public createQuestionnaire(): void {
    this._quizzService.createQuizz()
  }

}
