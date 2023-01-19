import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PlayQuizzService } from '../../modules/play/services/play-quizz.service';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  /**
   * Properties.
   */
  public PIN: string = '';

  public errorMsg: string = '';

  /** Subscriptions */
  public subscriptionTranslation: Subscription;

  constructor(
    private _playService: PlayQuizzService,
    private _translationService: TranslocoService,
    private _notificationService: NotificationService
  ) {
    // Get translation
    this.subscriptionTranslation = this._translationService.selectTranslate('home.errorMsg')
                         .subscribe(value => this.errorMsg = value);
  }
  ngOnDestroy(): void {
    this.subscriptionTranslation.unsubscribe();
  }

  /** Methods */

  public enterGame(): void {
    if(this.PIN === '') {
      this._notificationService.showError('','Complete with the Code Quizz');
      return;
    }
    this.validatePinGame();
  }

  public validatePinGame(): void {

  }


}
