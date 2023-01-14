import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from '@firebase/util';
import { Subscription } from 'rxjs';
import { IUser } from 'src/core/auth/interfaces/auth.interface';
import { AuthService } from 'src/core/auth/services/auth/auth.service';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { Questionnaire } from '../../models/questionnaire.class';
import { QuizzService } from '../../services/quizz.service';
export interface PeriodicElement {
  title: string;
  numberQuestions: number;
  code: number;
}

@Component({
  selector: 'app-list-questionnaire',
  templateUrl: './list-questionnaire.component.html',
  styleUrls: ['./list-questionnaire.component.css']
})
export class ListQuestionnaireComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['title', 'numberQuestions', 'code', 'actions'];
  public clickedRows = new Set<PeriodicElement>();

  /** Properties */
  public loading: boolean = false;
  public user: IUser;
  public dataSource = new MatTableDataSource<Questionnaire>();
  public idQuestionnaire: string = '';
  public subscription: Subscription = new Subscription();

  constructor(
    private _quizzService: QuizzService,
    private _authService: AuthService,
    private _notificationService: NotificationService
  ) {
    this.user = this._authService.getUserFromSessionStorage();
  }

  ngOnInit(): void {
    this.loading = true;
    this.getQuestionnaires();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getQuestionnaires(): void {


    let listQuestionnaires: Questionnaire[] = [];
    this.subscription = this._quizzService.getQuestionnairesByIdUser(this.user.uid).subscribe( data => {

      // Push the items to the array.
      data.forEach( (ques: any) => {
        listQuestionnaires.push(
          {
            id: ques.payload.doc.id,
            ...ques.payload.doc.data()
          }
          );

      });

      this.dataSource.data = listQuestionnaires;
      // Set the loader to false.
      this.loading = false;

    }, error => {

      console.log(error);
      this._notificationService.showError("We couldn't show the questionnaires data','Error");
      this.loading = false;
    });

  }

  public selectItemToDelete(id: string): void {
    this.idQuestionnaire = id;
  }

}
