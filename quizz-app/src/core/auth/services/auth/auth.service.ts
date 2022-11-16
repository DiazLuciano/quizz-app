import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject, Observable } from 'rxjs';
import { IPreUser, IUser } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Constructor.
   */
  constructor(
    private _angularAuth: AngularFireAuth,
    private _router: Router) {}

  /* ACCESS TOKEN */
  /**
   * SET
   */
  public set accessToken(token: string) {
    sessionStorage.setItem('accessToken', token);
  }

  /**
   * GET
   */
  public get accessToken(): string {
    return sessionStorage.getItem('accessToken') ?? '';
  }

  /**
   * METHODS
   * ===============================================================
   */

  /**
   * Private Method to remove the items from session storage.
   */
  private removeUserFromSessionStorage(): void {
    sessionStorage.clear();
  }

  /**
   * This method gets the data from the session storage.
   * @returns An instances of IUser with data.
   */
  public getUserFromSessionStorage(): IUser {
    const user: IUser = JSON.parse(sessionStorage.getItem('user') || '{}');
    return user;
  }

  /**
   * This method set the data user on a session storage.
   */
  public setUserToSessionStorage(resUser: any): void {
    const user: IUser = {
      uid: resUser.uid,
      email: resUser.email,
      token: resUser.refreshToken
    }
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * SIGN IN Method.
   *
   * @param user
   * @returns
   */
  public signIn(user: IPreUser): Promise<any> {
    return this._angularAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  /**
   * SIGN UP Method.
   *
   * @param user
   * @returns
   */
  public signUp(user: IPreUser): Promise<any> {
    return this._angularAuth.createUserWithEmailAndPassword(user.email, user.password!);
  }

  /**
   * SIGN OUT Method.
   */
  public signOut(): void {
    this.removeUserFromSessionStorage();
    this._angularAuth.signOut();
    this._router.navigate(['/auth/login']);
  }

}
