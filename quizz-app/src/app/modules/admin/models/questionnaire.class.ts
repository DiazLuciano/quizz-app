import { Question } from "./question.class";

export class Questionnaire {
  id?: string;
  uid: string;
  title: string;
  description: string;
  code: string;
  numberQuestions: number;
  createDate: Date;
  listQuestions: Question[];

  constructor(
    uid: string,
    title: string,
    description: string,
    code: string,
    numberQuestions: number,
    createDate: Date,
    listQuestions: Question[]
  ) {
    this.uid = uid;
    this.title = title;
    this.description = description;
    this.code = code;
    this.numberQuestions = numberQuestions;
    this.createDate = createDate;
    this.listQuestions = listQuestions;
  }

}
