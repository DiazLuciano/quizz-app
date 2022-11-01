import { Injectable } from '@angular/core';
import { ErrorAuthCode, MAP_AUTH_ERRORS, ErrorAuthDescription } from '../../constants/error.types';
import { NotificationService } from '../../../services/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorAuthService {

  private mapAuthErrors = MAP_AUTH_ERRORS;

  constructor(
    private _notificationService: NotificationService
  ) { }

  public manageErrors(code: ErrorAuthCode): void {

    const errorDescription: ErrorAuthDescription = this.mapAuthErrors.get(code)!;

    this._notificationService.showError(errorDescription);
  }
}
