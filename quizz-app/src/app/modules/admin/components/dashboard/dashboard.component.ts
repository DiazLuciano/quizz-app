import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { IUser } from '../../../../../core/auth/interfaces/auth.interface';
import { AuthService } from '../../../../../core/auth/services/auth/auth.service';
import { Questionnaire } from '../../models/questionnaire.class';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../../../core/services/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
}
