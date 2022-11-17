import { Answer } from "./answer.class";

export class Question {
  title: string;
  score: number;
  seconds: number;
  listAnswers: Answer[];

  constructor(
    title: string,
    score: number,
    seconds: number,
    listAnswers: Answer[]
  ) {
    this.title = title;
    this.score = score;
    this.seconds = seconds;
    this.listAnswers = listAnswers;
  }
}
