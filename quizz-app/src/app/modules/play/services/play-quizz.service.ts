import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Questionnaire } from '../../admin/models/questionnaire.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayQuizzService {

  public quizz!: Questionnaire;
  public playerName!: string;

  constructor(
    private _firestore: AngularFirestore,
    private _router: Router) { }

  public getQuestionnaireByCode(code: string): Observable<any> {
    return this._firestore.collection('questionnaires', ref => ref.where('code', '==', code)).get();
  }

  public getUserAnswer(id: string): Observable<any> {
    return this._firestore.collection('answers').doc(id).get();
  }

  public setPlayerAnswersQuestionnaire(answers: any): Promise<any> {
    return this._firestore.collection('answers').add(answers);
  }

  public validateQuizzRefresh(): Questionnaire | undefined {
    return this.quizz;
  }
}
