import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'quizz-app';
  subscription: Subscription = new Subscription;

  /**
   *
   */
  constructor(
    private _router: Router,
    private aRoute: ActivatedRoute,
    private _titleService: Title
  ) {

  }

  ngOnInit():void {

    this.subscription = this._router.events.pipe(
      filter( events => events instanceof NavigationEnd),
      map( () => {

        const child = this.aRoute.firstChild;
        if( child?.snapshot.data['title'] ) {
          return child.snapshot.data['title'];
        }

        return this.title;
      })
    ).subscribe( (ttl: string) => {
      this._titleService.setTitle(ttl);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
