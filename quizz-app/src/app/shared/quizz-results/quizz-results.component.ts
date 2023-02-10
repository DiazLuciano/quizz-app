import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayQuizzService } from 'src/app/modules/play/services/play-quizz.service';
import { Subscription } from 'rxjs';
import { ResultQuizz } from '../../../core/interfaces/result-quizz.interface';

@Component({
  selector: 'app-quizz-results',
  templateUrl: './quizz-results.component.html',
  styleUrls: ['./quizz-results.component.css']
})
export class QuizzResultsComponent implements OnInit, OnDestroy {

  /** Properties */
  public id: string;
  public loading = true;
  public resultQuizz!: ResultQuizz;
  public previousRoute = '';

  /** Subscriptions */
  public subscriptionResult: Subscription = new Subscription();

  /**
   * Constructor
   *
   * @param _playService
   * @param aRoute
   * @param _router
   */
  constructor(
    private _playService: PlayQuizzService,
    private aRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
    this.previousRoute = this.aRoute.snapshot.url[0].path;
  }

  /** HOOOKS */

  /**
   * NgOnInit
   */
  public ngOnInit(): void {
    this.getUserAnswer();
  }

  /**
   * OnDestroy
   */
  public ngOnDestroy(): void {
    this.subscriptionResult.unsubscribe();
  }

  /** METHODS */

  public getUserAnswer() {
    this.subscriptionResult = this._playService.getUserAnswer(this.id).subscribe(
      {
        next: (doc:any) => {
          this.resultQuizz = doc.data();
        },
        error: (err:any) => {
          console.log(err);
        },
        complete: () => {
          this.loading = false;
        }
      }
    )
  }

  public back() {
    if (this.previousRoute == 'quizz-result-admin') {
      this._router.navigate(['admin/statistics', this.resultQuizz.idQuestionnaire]);
    } else {
      this._router.navigate(['/'])
    }
  }
}
