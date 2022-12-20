import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../../core/services/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private _dialogService: DialogService
    ) { }

  public onHandleClickConfirmation(value: boolean): void {
    this._dialogService.setConfirmation(value);
  }

}
