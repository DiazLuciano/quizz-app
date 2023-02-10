import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/material/dialog/dialog.component';
import { Question } from '../../models/question.class';
import { QuizzService } from '../../services/quizz.service';
import { DialogService } from '../../../../../core/services/dialog/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnDestroy {

  /**
   * PROPERTIES
   */
  public showDialog: boolean = false;
  public listQuestions: Question[] = [];
  public enterAnimationDuration: string = '0ms';
  public exitAnimationDuration: string = '0ms';
  public confirmation: Subscription;

  public indexSelectedToDelete: number = 0;
  @Output() public nextStep: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _quizzService: QuizzService,
    private _dialogService: DialogService,
    public dialog: MatDialog
  ) {
    this._quizzService.getAddedQuestion().subscribe( data => {
      this.listQuestions.push(data);
    });

    this.confirmation = this._dialogService.getConfirmation().subscribe( data => {
      if(data) {
        this.deleteItem();
      }
    })
   }

  /* LIFECYCLE HOOKS */
  /*============================================================== */

  /**
  * NgOnDestroy method.
  */
   public ngOnDestroy(): void {
    this.confirmation.unsubscribe();
  }

  /* METHODS */
  /*============================================================== */

  public createQuestionnaire(): void {
    this._quizzService.listQuestions = this.listQuestions;
    this._quizzService.numberQuestions = this.listQuestions.length;
    this.nextStep.emit(true);
  }

  public setIndexToDeleteItem(index: number): void {
    this.indexSelectedToDelete = index;
  }

  public deleteItem(): void {
    this.listQuestions.splice(this.indexSelectedToDelete, 1);
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
}
