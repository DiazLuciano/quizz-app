import { Component } from '@angular/core';
import { AuthService } from '../../../../../core/auth/services/auth/auth.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public userEmail: string = '';

  /**
   * Constructor.
   *
   * @param _authService
   */
  constructor(
    private _authService: AuthService,
    private _dashboardSevice: DashboardService) {
      this.userEmail = this._dashboardSevice.getUserEmail();
     }

  /**
   * This method calls the sign out method from auth service.
   */
  public signOut(): void {
    this._authService.signOut();
  }

}
