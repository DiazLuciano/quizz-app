import { Injectable } from '@angular/core';
import { IUser } from 'src/core/auth/interfaces/auth.interface';
import { AuthService } from '../../../../core/auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private _authService: AuthService
  ) { }

  public getUserEmail(): string {
    const user: IUser = this._authService.getUserFromSessionStorage();
    return user.email;
  }

}
