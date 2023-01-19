import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PlayQuizzService } from '../../modules/play/services/play-quizz.service';
import { NotificationService } from 'src/core/services/notification/notification.service';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/app/modules/admin/models/questionnaire.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  /** Properties */
  public PIN: string = '';
  public loading: boolean = false;
  public quizz!: Questionnaire;

  /** Translations */
  public errorEmptyMsg: string = '';
  public errorPinNotFound: string = '';
  public systemError: string = '';

  /** Subscriptions */
  public subscriptionTranslation: Subscription;

  /**
   * Constructor
   *
   * @param _playService
   * @param _translationService
   * @param _notificationService
   * @param _router
   */
  constructor(
    private _playService: PlayQuizzService,
    private _translationService: TranslocoService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {
    // Get translation
    this.subscriptionTranslation = this._translationService.selectTranslateObject('home')
      .subscribe(value => {
        this.errorEmptyMsg = value['errorEmptyMsg']
        this.errorPinNotFound = value['errorPinNotFound']
        this.systemError = value['systemError']
      });
  }

  /** HOOKS */

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.subscriptionTranslation.unsubscribe();
  }

  /** METHODS */

  public enterGame(): void {
    if(this.PIN === '') {
      this._notificationService.showError('',this.errorEmptyMsg);
      return;
    }
    this.validatePinGame();
  }

  public validatePinGame(): void {
    this.loading = true;

    this._playService.getQuestionnaireByCode(this.PIN).subscribe(
      {
        next: res => {

          if( !res.empty ) {

            res.forEach((element:any) => {

              this.quizz = {
                id: element.id,
                ...element.data()
              }
            });

            this._playService.quizz = this.quizz;
            this._router.navigate(['play']);

          } else {
            this._notificationService.showError(this.errorPinNotFound, 'Not Found');
          }

        },
        error: err => {
          console.log(err);
          this._notificationService.showError(this.systemError, 'Error');
        },
        complete: () => {
          this.loading = false;
        }
      }
    );
  }


}
