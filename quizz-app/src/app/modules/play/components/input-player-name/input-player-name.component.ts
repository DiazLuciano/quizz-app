import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { PlayQuizzService } from '../../services/play-quizz.service';
import { Questionnaire } from 'src/app/modules/admin/models/questionnaire.class';
import { Subscription } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-input-player-name',
  templateUrl: './input-player-name.component.html',
  styleUrls: ['./input-player-name.component.css']
})
export class InputPlayerNameComponent implements OnInit, OnDestroy {
  /** Properties */
  public playerName: string = '';
  public form: FormGroup;

  /** Translations  */
  public validateMsg!: string;

  /** Subscriptions */
  public subscriptionTranslation: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _playService: PlayQuizzService,
    private _notificationService: NotificationService,
    private _translationService: TranslocoService,
    private _formBuilder: FormBuilder) {
      this.form = this._formBuilder.group({
        playerName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]]
      })
  }

  /** HOOKS */

  /**
   * OnInit
   */
  public ngOnInit(): void {
    this.subscriptionTranslation =  this._translationService.selectTranslate('validateMsg').subscribe( value => {
      this.validateMsg = value;
    });
  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.subscriptionTranslation.unsubscribe();
  }

  /** METHODS */

  public validateRefresh(): boolean {
    const response: Questionnaire | undefined = this._playService.validateQuizzRefresh();
    if(response === undefined) {
      this._notificationService.showError('',this.validateMsg);
      this._router.navigate(['/']);
      return false;
    }
    return true;
  }

  public setName(): void {
    if(this.form.invalid) {
      return;
    }
    if(this.validateRefresh()) {
      this._playService.playerName = this.form.get('playerName')?.value;
      this._router.navigate(['/play/counter']);
    }
  }

}
