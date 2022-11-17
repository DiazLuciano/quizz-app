import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnaireComponent } from './components/list-questionnaire/list-questionnaire.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ListQuestionnaireComponent,
    data: {
      title: 'Dashboard',
      description: 'Here you can see all your questionnaires created.'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
