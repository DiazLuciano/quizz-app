import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPlayerNameComponent } from './components/input-player-name/input-player-name.component';
import { CounterComponent } from './components/counter/counter.component';
import { PlayQuizzComponent } from './components/play-quizz/play-quizz.component';
import { QuizzResultsComponent } from '../../shared/quizz-results/quizz-results.component';

const routes: Routes = [
  {
    path: '',
    component: InputPlayerNameComponent
  },
  {
    path: 'counter',
    component: CounterComponent,
    pathMatch: 'full'
  },
  {
    path: 'play-quizz',
    component: PlayQuizzComponent,
    pathMatch: 'full'
  },
  {
    path: 'quizz-result/:id',
    component: QuizzResultsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
