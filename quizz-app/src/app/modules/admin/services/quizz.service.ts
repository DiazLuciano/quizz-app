import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Question } from '../models/question.class';
import { Questionnaire } from '../models/questionnaire.class';
import { NotificationService } from '../../../../core/services/notification/notification.service';

// Nano ID - It generates the Quizz Code.
import { nanoid } from 'nanoid'

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  /**
   * PROPERTIES
   */

  /* First Data Questionnaire */
  public uid: string = '';
  public titleQuizz: string = '';
  public descriptionQuizz: string = '';

  /* Second Data Questionnaire */
  public numberQuestions: number = 0;
  public listQuestions!: Question[];

  private question$ = new Subject<Question>;
  public questionnaire!: Questionnaire;

  constructor(
    private _fireStore: AngularFirestore,
    private _notificationService: NotificationService
  ) { }

  public showError(): void {
    this._notificationService.showError('Please, complete all the fields', 'ERROR')
  }

  public addQuestion(question: Question) {
    this.question$.next(question);
  }

  public getAddedQuestion(): Observable<Question> {
    return this.question$.asObservable();
  }

  public createQuestionnaire(questionnaire: Questionnaire): Promise<any> {
    return this._fireStore.collection('questionnaires').add(questionnaire);
  }

  public getQuestionnairesByIdUser(uid: string): Observable<any> {
    return this._fireStore.collection('questionnaires', ref => ref.where('uid', '==', uid)).snapshotChanges();
  }

  public getQuestionnaireById(id: string): Observable<any> {
    return this._fireStore.collection('questionnaires').doc(id).get();
  }

  public deleteQuestionnaire(id: string): Promise<any> {
    return this._fireStore.collection('questionnaires').doc(id).delete();
  }

  public getAnswerByIdQuestionnaire(id: string): Observable<any> {
    return this._fireStore.collection('answers', ref => ref.where('idQuestionnaire', '==', id)).snapshotChanges();
  }

  public deleteUserAnswer(id: string): Promise<any> {
    return this._fireStore.collection('answers').doc(id).delete();
  }

  public createQuizz(): void {

    if(this.validateData()) {

      this.setDataQuizz();

    } else {
      // TODO - Return false
    }
  }

  /* HELPER FUNCTIONS */

  public showSuccessNotification(): void {
    this._notificationService.showInfo('', 'Saved');
  }

  /**
   * This method creates a random code using nano package.
   *
   * @param length The length of the string code.
   * @returns The generated code.
   */
  public generateCode(length: number): string {
    return nanoid(length).toUpperCase();
  }

  /**
   * This method manages the validation of the data quizz.
   *
   * @returns True: If the data is not empty.
   * False: If any field is empty.
   */
  public validateData(): boolean {
    if(
      this.uid !== '',
      this.titleQuizz !== '',
      this.descriptionQuizz !== '',
      this.numberQuestions !== 0,
      this.listQuestions.length > 0
    ) {
      return true;
    }
    return false;
  }

  /**
   * This method sets the data to an instance of Questionnaire interface.
   */
  public setDataQuizz(): void {
    this.questionnaire = {
      uid: this.uid,
      title: this.titleQuizz,
      description: this.descriptionQuizz,
      numberQuestions: this.numberQuestions,
      listQuestions: this.listQuestions,
      code: this.generateCode(6),
      createDate: new Date()
    }
  }
}
