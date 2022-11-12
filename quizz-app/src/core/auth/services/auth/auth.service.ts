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
  private $isLogged = new Subject<boolean>;

  /**
   * Constructor.
   */
  constructor(
    private _angularAuth: AngularFireAuth,
    private _router: Router) { }

  /** METHODS */



  public setIsLogged(value: boolean) {
    this.$isLogged.next(value);
  }

  public getIsLogged(): Observable<boolean> {
    return this.$isLogged.asObservable();
  }

  public getUserFromSessionStorage(): void {

  }

  private removeUserFromSessionStorage(): void {
    sessionStorage.clear();
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

  public signIn(user: IPreUser): Promise<any> {
    return this._angularAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  public signUp(user: IPreUser): Promise<any> {
    return this._angularAuth.createUserWithEmailAndPassword(user.email, user.password!);
  }

  /**
   * This method manages the user to sign out. Remove the session storage data and redirect to login.
   */
  public signOut(): void {
    this.removeUserFromSessionStorage();
    this._angularAuth.signOut();
    this._router.navigate(['/auth/login']);
  }

}
