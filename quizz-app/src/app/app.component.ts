import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quizz-app';
  subscription: Subscription = new Subscription;

  /**
   *
   */
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
    private readonly metaSerivce: Meta
  ) {

  }

  ngOnInit():void {

    this.router
      .events.pipe(

        filter( (events:any) => events instanceof NavigationEnd)

        ).subscribe( () => {

          var route = this.getChild(this.activatedRoute)
          var data = route.snapshot.data;

          this.titleService.setTitle(data.title);

          if(data.description) {
            this.metaSerivce.updateTag( { name: 'description', content: data.description })

          } else {
            this.metaSerivce.removeTag("name='description'")
          }
    })
  }

  private getChild(activatedRoute: ActivatedRoute): any {

    if(activatedRoute.firstChild)
      return this.getChild(activatedRoute.firstChild);
    else
      return activatedRoute;

  }

}
