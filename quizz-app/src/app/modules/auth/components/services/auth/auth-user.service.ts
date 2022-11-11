import { Injectable } from '@angular/core';
import { IPreUser } from 'src/core/auth/interfaces/auth.interface';
import { AuthService } from 'src/core/auth/services/auth/auth.service';
import { ErrorAuthService } from '../../../../../../core/auth/services/error/error-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(
    private _authService: AuthService,
    private _errorService: ErrorAuthService,
    private _router: Router
  ) { }

  public signIn(preUser: IPreUser): void {

    this._authService.signIn(preUser).then( res => {

      if(res.user.emailVerified) {

        this._authService.setUserToSessionStorage(res.user);
        this._router.navigate(['/admin']);

      } else {
        res.user?.sendEmailVerification();
        this._router.navigate(['/auth/verify']);
      }

    }).catch( error => {
      this._errorService.manageErrors(error.code);
    });
  }

  public signUp(preUser: IPreUser): Promise<any> {

    const result = new Promise<void>((resolve, reject) => {

      this._authService.signUp(preUser).then( (res:any) => {
        res.user?.sendEmailVerification();
        resolve(res);

      }).catch( (error) => {
        this._errorService.manageErrors(error.code)
        reject(error);
      });
    });

    return result;
  }

  public recoverPassword(): void {

  }

  public signOut(): void {
    this._authService.signOut();
  }
}
