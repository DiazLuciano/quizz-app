import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Answer } from '../../models/answer.class';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../../../core/services/notification/notification.service';
import { DialogComponent } from 'src/app/shared/material/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { DialogService } from 'src/core/services/dialog/dialog.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  /** Properties */
  public loading: boolean = false;
  public noResults: boolean = false;
  public idQuizz!: string;
  public idQuizzResult: string = '';

  /** Dialog Properties */
  public showDialog: boolean = false;
  public enterAnimationDuration: string = '0ms';
  public exitAnimationDuration: string = '0ms';

  /** Table Properties */
  public columnNames: string[] = [];
  public dataSource = new MatTableDataSource<Answer>();
  public displayedColumns: string[] = ['playerName', 'date', 'score', 'actions'];

  /** Translations */
  public titleEmptyMsg!: string;
  public itemDeleted!: string;
  public errorDeleting!: string;

  /** Subscriptions */
  public susbcriptionResults: Subscription = new Subscription();
  public subscriptionTranslation: Subscription = new Subscription();
  public subscriptionConfirmation: Subscription = new Subscription();

  constructor(
    private _quizzService: QuizzService,
    private _aRoute: ActivatedRoute,
    private _notificationService: NotificationService,
    public dialog: MatDialog,
    private _dialogService: DialogService,
    private _translocoService: TranslocoService
  ) {
    this.idQuizz = this._aRoute.snapshot.paramMap.get('id')!;
  }

  /** HOOKS */

  /**
   * OnInit
   */
  public ngOnInit(): void {
    // Get Results
    this.getResults();

    // Get translation
    this.subscriptionTranslation = this._translocoService.selectTranslateObject('statistics').subscribe(
      {
        next: (obj:any) => {
          this.titleEmptyMsg = obj.emptyMsgTitle;
          this.itemDeleted = obj.itemDeleted;
          this.errorDeleting = obj.errorDeleting;
        },
        error: (error:any) => { console.log(error); },
      }
    )

    // Check item to delete
    this.subscriptionConfirmation = this._dialogService.getConfirmation().subscribe( {
      next: (data: any) => {
        if(data) {
          this.deleteItem();
          this.getResults();
        }
      },
      error: (error:any) => { console.log(error); }
    });

  }

  /**
   * OnDestroy
   */
  public ngOnDestroy(): void {
    this.susbcriptionResults.unsubscribe();
    this.subscriptionTranslation.unsubscribe();
    this.subscriptionConfirmation.unsubscribe();
  }

  /** Methods */

  /**
   * This method gets the results of quizzes complete.
   */
  public getResults(): void {
    this.loading = true;
    let listResults: Answer[] = [];

    this.susbcriptionResults = this._quizzService.getAnswerByIdQuestionnaire(this.idQuizz).subscribe(
    {
      next: (data:any) => {
        data.forEach((element:any) => {
            listResults.push(
            {
              id: element.payload.doc.id,
              ...element.payload.doc.data()
            }
          )
        });

        if( listResults.length === 0) this.noResults = true;
        this.dataSource.data = listResults;
        this.loading = false;
      },
      error: (error) => {
        console.log(error)
      },

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

  /**
   * This method manages the ID to delete.
   *
   * @param id ID of the quizz to delete.
   */
  public selectItemToDelete(id: string): void {
    this.idQuizzResult = id;
    this.openDialog();
  }

  /**
   * This method manages the delete method from the quizz result service.
   */
  public deleteItem(): void {
    this.loading = true;
    this._quizzService.deleteUserAnswer(this.idQuizzResult)
      .then( () => {
        this._notificationService.showSuccess('', this.itemDeleted);
      })
      .catch( (err:any) => {
        console.log(err);
          this._notificationService.showError(this.errorDeleting, 'Oops');
      })
      .finally( () => { this.loading = false; });
  }
}
