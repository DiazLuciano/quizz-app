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
   * Properties
   */
  private isLogged: boolean;

  /**
   * GETTERS
   * @param value
   */
  public setIsLogged(value: boolean): void {
    this.isLogged = value;
  }

  /**
   * SETTERS
   * @returns
   */
  public getIsLogged(): boolean {
    return this.isLogged;
  }

  /**
   * Constructor.
   */
  constructor(
    private _angularAuth: AngularFireAuth,
    private _router: Router) {
      this.isLogged = this.getIsLogged();
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
   * This method checks if the user is logged or not.
   */
  public checkUserLogged(): boolean {
    const user: IUser = this.getUserFromSessionStorage();

    if(Object.keys(user).length === 0)
      return false;
    else
      return true;
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
    this.setIsLogged(false);
    this.removeUserFromSessionStorage();
    this._angularAuth.signOut();
    this._router.navigate(['/auth/login']);
  }

}
