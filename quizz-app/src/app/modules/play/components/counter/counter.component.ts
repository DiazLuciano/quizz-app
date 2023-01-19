import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/app/modules/admin/models/questionnaire.class';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { PlayQuizzService } from '../../services/play-quizz.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  /** Properties */
  public counter: number = 3;
  public intervalCounter: any;

  /** Translations  */
  public validateMsg!: string;

  /** Subscriptions */
  public susbscriptionTranslation: Subscription = new Subscription();

  /**
   * Constructor.
   *
   * @param _router
   */
  constructor(
    private _router: Router,
    private _playService: PlayQuizzService,
    private _notificationService: NotificationService,
    private _translationService: TranslocoService,
  ) { }

  /**
   * OnInit
   */
  public ngOnInit(): void {
    this.susbscriptionTranslation = this._translationService.selectTranslate('validateMsg').subscribe( value => {
      this.validateMsg = value;

      this.validateRefresh().then( (res:boolean) => {
        if(!res) {
          this._notificationService.showError('',value);
          this._router.navigate(['/']);
        }
        this.setCounter();
      })
    });
  }

  /**
   * OnDestroy
   */
  public ngOnDestroy(): void {
    this.susbscriptionTranslation.unsubscribe();
    clearInterval(this.intervalCounter);
  }

  /** METHODS */

  public async validateRefresh(): Promise<boolean> {
    const quizz: Questionnaire | undefined = this._playService.validateQuizzRefresh();

    if(quizz !== undefined) {
      const playerName = this._playService.playerName;
      if(playerName !== undefined || playerName !== '') {
        return true;
      }
    }


    return false;
  }

  public setCounter() {
    this.intervalCounter = setInterval( () => {
      // Check if counter equals 0.
      if ( this.counter === 1 ) {
        this._router.navigate(['/play/play-quizz']);
      }
      this.counter = this.counter - 1;
    }, 1000);
  }

}
