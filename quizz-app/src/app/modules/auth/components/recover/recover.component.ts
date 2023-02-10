import { Component } from '@angular/core';
import { AuthUserService } from '../services/auth/auth-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../../core/services/notification/notification.service';
import { ErrorAuthService } from '../../../../../core/auth/services/error/error-auth.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent {
  /**
   * Properties.
   */
  public loading: boolean = false;
  public form: FormGroup;

  /**
   * Constructor.
   *
   * @param _authService
   * @param fb
   * @param _router
   * @param _notificationService
   */
  constructor(
    private _authService: AuthUserService,
    private fb: FormBuilder,
    private _router: Router,
    private _notificationService: NotificationService,
    private _errorService: ErrorAuthService) {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      })
    }

  /**
   * This method calls the recover method from auth service core.
   */
  public async recover(): Promise<void> {
    this.loading = true;
    return await this._authService.recoverPassword(this.form.get('email')?.value).then( () => {
      this._router.navigate(['auth/login']).then(() => {
        this._notificationService.showInfo(`A reset email has been sent to ${this.form.get('email')?.value}, please check your inbox`, 'Info')
      });
    }).catch(error => {
      this._errorService.manageErrors(error.code);
    }).finally( () => this.loading = false);
  }
}
