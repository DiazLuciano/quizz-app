import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IUser } from 'src/core/auth/interfaces/auth.interface';
import { AuthService } from 'src/core/auth/services/auth/auth.service';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { Questionnaire } from '../../models/questionnaire.class';
import { QuizzService } from '../../services/quizz.service';
import { DialogComponent } from 'src/app/shared/material/dialog/dialog.component';
import { DialogService } from 'src/core/services/dialog/dialog.service';
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

  /** Dialog Properties */
  public showDialog: boolean = false;
  public enterAnimationDuration: string = '0ms';
  public exitAnimationDuration: string = '0ms';

  public loading: boolean = false;
  public user: IUser;
  public dataSource = new MatTableDataSource<Questionnaire>();
  public idQuestionnaire: string = '';
  public subscription: Subscription = new Subscription();
  public confirmation: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private _quizzService: QuizzService,
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _dialogService: DialogService
  ) {
    this.user = this._authService.getUserFromSessionStorage();
  }

  ngOnInit(): void {
    this.loading = true;
    this.getQuestionnaires();

    this.confirmation = this._dialogService.getConfirmation().subscribe( data => {
      if(data) {
        this.deleteItem();
        this.getQuestionnaires();
      }
    })
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

  /**
   * This method trigger the angular material dialog modal.
   *
   * @param enterAnimationDuration A string that represents the delay to SHOW the dialog.
   * @param exitAnimationDuration A string that represents the delay to CLOSE the dialog.
   */
  public openDialog(enterAnimationDuration: string = this.enterAnimationDuration, exitAnimationDuration: string = this.exitAnimationDuration): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  public selectItemToDelete(id: string): void {
    this.idQuestionnaire = id;
    this.openDialog();
  }

  public deleteItem(): void {
    this.loading = true;

    this._quizzService.deleteQuestionnaire(this.idQuestionnaire).then( () => {

      this._notificationService.showSuccess('', 'Questionnaire Deleted');

    }).catch( err => {

      console.log(err);
      this._notificationService.showError('This questionnaire could not be deleted.', 'Error');

    });

    this.loading = false;
  }

}
