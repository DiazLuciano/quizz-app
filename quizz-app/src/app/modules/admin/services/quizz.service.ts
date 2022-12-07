import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Question } from '../models/question.class';
import { Questionnaire } from '../models/questionnaire.class';
import { NotificationService } from '../../../../core/services/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private question$ = new Subject<Question>;

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

}
