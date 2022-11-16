import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';
import { ListQuestionnaireComponent } from './components/list-questionnaire/list-questionnaire.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

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
    path: 'create-questionnaire',
    component: CreateQuestionnaireComponent,
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
