import { Injectable } from '@angular/core';
import { IPreUser } from 'src/core/auth/interfaces/auth.interface';
import { AuthService } from 'src/core/auth/services/auth/auth.service';
import { ErrorAuthService } from '../../../../../../core/auth/services/error/error-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  /**
   * Constructor.
   *
   * @param _authService
   * @param _errorService
   * @param _router
   */
  constructor(
    private _authService: AuthService,
    private _errorService: ErrorAuthService,
    private _router: Router
  ) { }

  /**
   * SIGN IN Method. With an email verification if the user has not been verified.
   *
   * @param preUser
   */
  public signIn(preUser: IPreUser): Promise<any> {

    const result = new Promise<void>( (resolve, reject) => {

      this._authService.signIn(preUser).then( res => {

        if(res.user.emailVerified) {
          this._authService.setUserToSessionStorage(res.user);
          this._router.navigate(['/admin']);

        } else {

          res.user?.sendEmailVerification();
          this._router.navigate(['/auth/verify']);
        }

        resolve(res);

      }).catch( error => {

        this._errorService.manageErrors(error.code);
        reject(error);

      });
    })

    return result;
  }

  /**
   * SIGN UP Method.
   *
   * @param preUser
   * @returns
   */
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

}
