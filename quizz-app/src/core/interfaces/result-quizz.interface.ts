import { PlayerAnswer } from './player-answer.interface';

export interface ResultQuizz {
  idQuestionnaire: string,
  playerName: string,
  date: Date,
  numberQuestions: number,
  numberCorrectOnes: number,
  numberIncorrectOnes: number,
  listUserAnswers: PlayerAnswer[],
  score: number
}
