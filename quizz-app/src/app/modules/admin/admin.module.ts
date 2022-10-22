import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListQuestionnaireComponent } from './components/list-questionnaire/list-questionnaire.component';


@NgModule({
  declarations: [
    NavigationComponent,
    ListQuestionnaireComponent,
    DashboardComponent,
    ListQuestionnaireComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
