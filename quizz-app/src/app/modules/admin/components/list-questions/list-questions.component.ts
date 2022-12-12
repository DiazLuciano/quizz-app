import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.class';
import { QuizzService } from '../../services/quizz.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent {

  /**
   * PROPERTIES
   */
  public listQuestions: Question[] = [];


  constructor(
    private _quizzService: QuizzService
  ) {
    this._quizzService.getAddedQuestion().subscribe( data => {
      this.listQuestions.push(data);
    });

    // this.questionnaireTitle = this._quizzService.titleQuizz;
    // this.questionnaireDescription = this._quizzService.descriptionQuizz;
    // this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
   }

  /* METHODS */
  /*============================================================== */

  public createQuestionnaire(): void {

  }


}
