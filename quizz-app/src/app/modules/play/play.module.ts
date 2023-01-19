import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InputPlayerNameComponent } from './components/input-player-name/input-player-name.component';
import { CounterComponent } from './components/counter/counter.component';
import { PlayQuizzComponent } from './components/play-quizz/play-quizz.component';


@NgModule({
  declarations: [
    InputPlayerNameComponent,
    CounterComponent,
    PlayQuizzComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule,
    SharedModule
  ]
})
export class PlayModule { }
