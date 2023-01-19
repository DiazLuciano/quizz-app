import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Answer } from '../../models/answer.class';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  /** Properties */
  public loading: boolean = false;
  public noResults: boolean = false;
  public idQuizz!: string;

  /** Dialog Properties */
  public showDialog: boolean = false;
  public enterAnimationDuration: string = '0ms';
  public exitAnimationDuration: string = '0ms';

  /** Table Properties */
  public dataSource = new MatTableDataSource<Answer>();


  constructor(
    private _quizzSerivce: QuizzService,
    private _aRoute: ActivatedRoute
  ) {
    this.idQuizz = this._aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loading = true;

    this._quizzSerivce.getAnswerByIdQuestionnaire(this.idQuizz).subscribe(
      {
        next: (res:any) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => this.loading = false
      }
    );
  }

}
