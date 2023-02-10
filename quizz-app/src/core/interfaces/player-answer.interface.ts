import { Answer } from '../../app/modules/admin/models/answer.class';

export interface PlayerAnswer {
  title: string,
  score: number,
  seconds: string,
  indexSelectedAnswer: number,
  listAnswers: Answer[]
}
