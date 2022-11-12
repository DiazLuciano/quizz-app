import { Component } from '@angular/core';
import { AuthService } from '../../../../../core/auth/services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  /**
   * Constructor.
   *
   * @param _authService
   */
  constructor(private _authService: AuthService) { }

  /**
   * This method calls the sign out method from auth service.
   */
  public signOut(): void {
    this._authService.signOut();
  }

}
