import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Properties.
   */
  PIN = '';
  title = '';


  /**
   * Constructor.
   * @param _titleService
   */
  constructor(
    private _titleService: Title,
  ) {
    this.title = _titleService.getTitle();
  }

  /**
   * NgOnInit
   */
  ngOnInit(): void {
  }

}
