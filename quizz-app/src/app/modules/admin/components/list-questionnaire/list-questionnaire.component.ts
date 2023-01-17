import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from '@firebase/util';
@Component({
  selector: 'app-list-questionnaire',
  templateUrl: './list-questionnaire.component.html',
  styleUrls: ['./list-questionnaire.component.css']
})
export class ListQuestionnaireComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['title', 'numberQuestions', 'code', 'actions'];

  /** Properties */
  public loading: boolean = false;
  public noResults: boolean = true;
  public titleEmptyMsg!: string;
  public user: IUser;
  public idQuestionnaire: string = '';

  /** Dialog Properties */
  public showDialog: boolean = false;
  public enterAnimationDuration: string = '0ms';
  public exitAnimationDuration: string = '0ms';

  /** Table Properties */
  public dataSource = new MatTableDataSource<Questionnaire>();

  /** Subscriptions */
  public subscriptionQuizz: Subscription = new Subscription();
  public subscriptionTranslation: Subscription = new Subscription();
  public subscriptionConfirmation: Subscription = new Subscription();

  /**
   * Constructor.
   *
   * @param dialog
   * @param _quizzService
   * @param _authService
   * @param _notificationService
   * @param _dialogService
   * @param _translocoService
   */
  constructor(
    public dialog: MatDialog,
    private _quizzService: QuizzService,
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _dialogService: DialogService,
    private _translocoService: TranslocoService
  ) {
    this.user = this._authService.getUserFromSessionStorage();
  }

  /**
   * HOOKS SECTION
   */

  /**
   * OnInit.
   */
  public ngOnInit(): void {
    // Get quizzes
    this.getQuestionnaires();
    // Get translation
    this.subscriptionTranslation = this._translocoService.selectTranslate('listQuestionnaires.emptyMsgTitle')
                         .subscribe(value => this.titleEmptyMsg = value);
    // Check delete item
    this.subscriptionConfirmation = this._dialogService.getConfirmation().subscribe( data => {
      if(data) {
        this.deleteItem();
        this.getQuestionnaires();
      }
    });
  }

  /**
   * OnDestroy.
   */
  public ngOnDestroy(): void {
    this.subscriptionQuizz.unsubscribe();
    this.subscriptionTranslation.unsubscribe();
    this.subscriptionConfirmation.unsubscribe();
  }

  /**
   * METHODS
   */

  /**
   * This method brings the quizzes data to the user.
   */
  public getQuestionnaires(): void {
    this.loading = true;
    let listQuestionnaires: Questionnaire[] = [];
    this.subscriptionQuizz = this._quizzService.getQuestionnairesByIdUser(this.user.uid).subscribe( data => {
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
   * DELETE SECTION
   */

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

  /**
   * This method manages the ID to delete.
   *
   * @param id ID of the quizz to delete.
   */
  public selectItemToDelete(id: string): void {
    this.idQuestionnaire = id;
    this.openDialog();
  }

  /**
   * This method manages the delete method from the quizz service.
   */
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
