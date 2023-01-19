import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { ActivatedRoute } from '@angular/router';
import { Questionnaire } from '../../models/questionnaire.class';

@Component({
  selector: 'app-view-questionnaire',
  templateUrl: './view-questionnaire.component.html',
  styleUrls: ['./view-questionnaire.component.css']
})
export class ViewQuestionnaireComponent implements OnInit {

  /** Properties */
  public id!: string;
  public loading: boolean = false;
  public questionnaire: Questionnaire | undefined;

  constructor(
    private _quizzService: QuizzService,
    private _aRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this._aRoute.snapshot.paramMap.get('id')!;
    this.getQuizzById();
  }

  public getQuizzById(): void {
    this.loading = true;
    this._quizzService.getQuestionnaireById(this.id).subscribe(
      {
        next: (res:any) => {
          this.questionnaire = res.data();
        },
        error: (error:any) => {
          console.log(error);
        },
        complete: () => {
          this.loading = false;
        }
      }
    )
  }

}
