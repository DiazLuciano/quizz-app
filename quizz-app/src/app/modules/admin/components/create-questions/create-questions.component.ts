import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer } from '../../models/answer.class';
import { Question } from '../../models/question.class';
import { QuizzService } from '../../services/quizz.service';
import { NotificationService } from '../../../../../core/services/notification/notification.service';

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
  @Output() public nextStep: EventEmitter<boolean> = new EventEmitter();

  /** Slider Properties */
  public disabled = false;
  public max = 1000;
  public min = 0;
  public step = 50;
  public sliderValue = 500;

  /**
   * Constructor.
   *
   * @param formBuilder
   */
   constructor(
    private _quizzService: QuizzService,
    private _notificationService: NotificationService,
    private formBuilder: FormBuilder
  ) {
    // Form
    this.form = this.formBuilder.group({
      title: ['',Validators.required],
      seconds: [15, Validators.required],
      score: [500, Validators.required],

      // Sub Form
      answer1: this.formBuilder.group({
        title: ['', Validators.required],
        isCorrect: [false, Validators.required]
      }),

      // Sub Form
      answer2: this.formBuilder.group({
        title: ['', Validators.required],
        isCorrect: [false, Validators.required]
      }),

      // Sub Form
      answer3: this.formBuilder.group({
        title: '',
        isCorrect: false
      }),

      // Sub Form
      answer4: this.formBuilder.group({
        title: '',
        isCorrect: false
      }),
    });
  }

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


  /* METHODS */
  /*============================================================== */

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

  /**
   * This method resets the data form.
   */
  public reset() {
    this.form.patchValue({
      title: '',
      seconds: 15,
      points: 500,
      answer1: {
        title: '',
      },
      answer2: {
        title: '',
      },
      answer3: {
        title: '',
      },
      answer4: {
        title: '',
      }
    })
  }

  /**
   * This method get the answers data from the form.
   */
  public getAnswersFromForm(): Answer[] {

    let listAnswers: Answer[] = [];

    // Get answer 1
    let answer1: Answer = {
      description: this.form.get('answer1')?.get('title')?.value,
      isCorrect: this.form.get('answer1')?.get('isCorrect')?.value
    }

    // Get answer 2
    let answer2: Answer = {
      description: this.form.get('answer2')?.get('title')?.value,
      isCorrect: this.form.get('answer2')?.get('isCorrect')?.value
    }

    // Get optional answer 3
    let answer3: Answer = {
      description: this.form.get('answer3')?.get('title')?.value,
      isCorrect: this.form.get('answer3')?.get('isCorrect')?.value
    }

    // Get optional answer 4
    let answer4: Answer = {
      description: this.form.get('answer4')?.get('title')?.value,
      isCorrect: this.form.get('answer4')?.get('isCorrect')?.value
    }

    // Push answers to array
    listAnswers.push(answer1);
    listAnswers.push(answer2);

    // Push or not the optional answers
    if( answer3.description !== '') {
      listAnswers.push(answer3);
    }

    if( answer4.description !== '') {
      listAnswers.push(answer4);
    }

    return listAnswers;
  }

  /**
   * This method complete the Question variable with the form's data.
   *
   * @param listAnswers
   * @returns An instance of Question with complete data.
   */
  public getQuestionWithCompleteData(listAnswers: Answer[]): Question {

    const question: Question = {
      title: this.form.get('title')?.value,
      seconds: this.form.get('seconds')?.value,
      score: this.form.get('score')?.value,
      listAnswers: listAnswers
    }

    return question;
  }


  /**
   *  METHODS TO MANAGE THE CORRECT ONES VALUES.
   /*============================================================== */

  /**
   * Check if all answer are false before store the data.
   *
   * @returns
   */
  public allAnswersFalses(): boolean {

    const titleAnswers = ['answer1', 'answer2', 'answer3', 'answer4'];

    // If anyone is 'true', return true to make the form valid.
    for(let i = 0; i < titleAnswers.length; i ++) {

      if( this.form.get(titleAnswers[i])?.get('isCorrect')?.value == true )  {
        return false;
      }
    }

    return true;
  }

  /**
   * Set all the answers not selected in false.
   *
   * @param numberAnswer
   */
  public setFalseOtherAnswers(numberAnswer: string): void {
    const answers = ['answer1','answer2','answer3','answer4'];

    for(let i = 0; i < answers.length; i ++) {

      if( answers[i] !== numberAnswer ) {

        this.form.get(answers[i])?.patchValue({
          isCorrect: false
        });

      }
    }
  }

  /**
   * Get the value of the answer.
   *
   * @param numberAnswer
   * @returns
   */
  public getStatusAnswer(numberAnswer: string): string {
    return this.form.get(numberAnswer)?.get('isCorrect')?.value;
  }

  /**
   * Mark the choosen answer as correct.
   *
   * @param i Number of the answer.
   */
  public markAsCorrect(i: string): void {
    //Get the choosen answer
    let answer = 'answer';
    let numberAnswer = answer.concat(i);

    //Deselect the others answers.
    this.setFalseOtherAnswers(numberAnswer);

    const statusAnswer = this.getStatusAnswer(numberAnswer);

    this.form.get(numberAnswer)?.patchValue({
      isCorrect: !statusAnswer
    })
  }

  /* MAIN METHODS  */
  /*============================================================== */
  /**
   * Add Question to the list.
   */
  public addQuestion(): void {

    if(this.form.invalid || this.allAnswersFalses()) {
      this._notificationService.showError('', 'Complete all the fields')
      return;
    }

    const listAnswers = this.getAnswersFromForm();
    const question = this.getQuestionWithCompleteData(listAnswers);

    this._quizzService.addQuestion(question);

    this.reset();
  }

  public saveQuestions(): void {
    this.nextStep.emit(true);
  }

}
