import { Component, OnInit, OnDestroy } from '@angular/core';
import { Questionnaire } from 'src/app/modules/admin/models/questionnaire.class';
import { PlayQuizzService } from '../../services/play-quizz.service';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-play-quizz',
  templateUrl: './play-quizz.component.html',
  styleUrls: ['./play-quizz.component.css']
})
export class PlayQuizzComponent implements OnInit, OnDestroy {
  /** Translations */
  public validateMsg!: string;
  public saveSuccess!: string;
  public saveFail!: string;

  /** Properties */
  public loading: boolean = false;

  /** User Answers Properties */
  public selectedOption: any;
  public indexSelected: any;
  public correctOnes = 0;
  public IncorrectOnes = 0;
  public totalScore = 0;
  public listUserAnswers: any[] = [];

  /** Counter Properties */
  public seconds!: number;
  public setInterval: any;
  public counter: number = 8;

  /** Quizz Properties */
  public quizz: Questionnaire;
  public playerName!: string;
  public indexQuestion: number = 0;

  /** Subscriptions */
  public subscriptionTranslation: Subscription = new Subscription();

  constructor(
    private _playService: PlayQuizzService,
    private _translationService: TranslocoService,
    private _router: Router,
    private _notificationService: NotificationService
  ) {
    const validated = this.validateRefresh();
    if(!validated) {
      this._router.navigate(['/']);
    }
    this.quizz = this._playService.quizz;
    this.playerName = this._playService.playerName;
  }

  /** HOOKS */
  /** ======================================================================= */
  /**
   * OnInit
   */
  public ngOnInit(): void {
    // Translate
    this.subscriptionTranslation =  this._translationService.selectTranslateObject('playQuizz').subscribe( value => {
      this.saveSuccess = value.saveSuccess;
      this.saveFail = value.saveFail
    });
    this.initCounter();
  }

  /**
   * OnDestroy.
   */
  public ngOnDestroy(): void {
    clearInterval(this.setInterval);
    this.subscriptionTranslation.unsubscribe();
  }


  /** METHODS */
  /** ======================================================================= */

  public getSeconds(): number {
    return this.seconds;
  }

  public getQuestionTitle(): string {
    return this.quizz.listQuestions![this.indexQuestion].title;
  }

  public initCounter() {
    if (this.quizz.listQuestions !== undefined) {
      this.seconds = this.quizz.listQuestions[this.indexQuestion].seconds;
      this.setInterval = setInterval( () => {
        this.seconds = this.seconds - 1;
        if ( this.seconds < 0 ) {
          this.next();
        }
      }, 1000);
    }
  }

  public validateRefresh(): boolean {
    const response: Questionnaire | undefined = this._playService.validateQuizzRefresh();
    if(response === undefined) {
      return false;
    }
    return true;
  }

  public next() {
    clearInterval(this.setInterval);
    this.addSelectedAnswer();
    this.initCounter();
  }

  public addSelectedAnswer() {
    // Correct and Incorrects.
    this.checkCounterForCorrectAndIncorrect();

    // Create answer object.
    const userAnswer = {
      title: this.quizz.listQuestions![this.indexQuestion].title,
      totalScore: this.getQuestionPoints(),
      seconds: this.getWaitedSeconds(),
      indexSelectedAnswer: this.getSelectedIndex(),
      listAnswers: this.quizz.listQuestions![this.indexQuestion].listAnswers
    };

    this.listUserAnswers.push(userAnswer);

    this.selectedOption = undefined;
    this.indexSelected = undefined;

    // Check if its the last question.
    if( this.quizz.listQuestions!.length - 1 === this.indexQuestion ) {
      // Save on firebase
      this.saveUserAnswersQuestionnaire();
    } else {
      this.indexQuestion ++;
      this.seconds = this.quizz.listQuestions![this.indexQuestion].seconds;
    }
  }

  public checkCounterForCorrectAndIncorrect() {
    if(this.selectedOption === undefined ) {
      this.IncorrectOnes ++;
      return;
    }
    if ( !this.selectedOption.isCorrect ) {
      this.IncorrectOnes ++;
    } else {
      this.correctOnes ++;
    }
  }

  public getTitle(): string {
    return this.quizz.listQuestions![this.indexQuestion].title;
  }

  public getSelectedIndex() {
    if( this.selectedOption === undefined ) {
      return '';
    } else {
      return this.indexSelected;
    }
  }

  public getQuestionPoints(): number {
    // Check if user didn't select any answer
    if (this.selectedOption === undefined ) {
      return 0;
    }

    const pointsQuestion = this.quizz.listQuestions![this.indexQuestion].score;
    if ( this.selectedOption.isCorrect == true ) {
      this.totalScore = this.totalScore + pointsQuestion;
      return pointsQuestion;
    } else {
      return 0;
    }
  }

  public getWaitedSeconds(): string {
    if ( this.selectedOption === undefined ) {
      return 'NOT ANSWER';
    } else {
      const seconds = this.quizz.listQuestions![this.indexQuestion].seconds;
      const waitedSeconds = seconds - this.seconds;
      return waitedSeconds.toString();
    }
  }

  public selectedAnswer(answer: any, index: number) {
    this.selectedOption = answer;
    this.indexSelected = index;
  }

  public saveUserAnswersQuestionnaire() {
      this.loading = true;

      const answersQuestionnaire: any = {
        idQuestionnaire: this.quizz.id,
        playerName: this.playerName,
        date: new Date(),
        numberQuestions: this.quizz.numberQuestions,
        numberCorrectOnes: this.correctOnes,
        numberIncorrectOnes: this.IncorrectOnes,
        listUserAnswers: this.listUserAnswers,
        score: this.totalScore
      }

      this._playService.setPlayerAnswersQuestionnaire(answersQuestionnaire).then( data => {

        this._notificationService.showSuccess('', this.saveSuccess);

        // Redirect
        this._router.navigate(['/play/quizz-result/' + data.id]);

      }).catch( error => {
        console.log(error)
        this._notificationService.showError(this.saveFail , 'Oops');
        this._router.navigate(['/'])

      }).finally(() => {
        this.loading = false;
      });
  }
}
