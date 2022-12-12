import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire.class';

@Injectable({
  providedIn: 'root'
})
export class CreateQuestionnaireService {

  public titleQuizz: string = '';
  public descriptionQuizz: string = '';

  constructor() { }
}
