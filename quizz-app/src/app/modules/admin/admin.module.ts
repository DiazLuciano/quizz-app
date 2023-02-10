import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListQuestionnaireComponent } from './components/list-questionnaire/list-questionnaire.component';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { CreateComponent } from './components/create/create.component';
import { ListQuestionsComponent } from './components/list-questions/list-questions.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ViewQuestionnaireComponent } from './components/view-questionnaire/view-questionnaire.component';


@NgModule({
  declarations: [
    NavigationComponent,
    ListQuestionnaireComponent,
    DashboardComponent,
    ListQuestionnaireComponent,
    CreateQuestionnaireComponent,
    StatisticsComponent,
    CreateQuestionsComponent,
    CreateComponent,
    ListQuestionsComponent,
    ViewQuestionnaireComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TranslocoModule
  ]
})
export class AdminModule { }
