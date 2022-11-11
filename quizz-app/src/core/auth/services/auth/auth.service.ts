import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject, Observable } from 'rxjs';
import { IPreUser, IUser } from '../../interfaces/auth.interface';

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
  constructor(private _angularAuth: AngularFireAuth) { }

  /** METHODS */

  private removeUserFromSessionStorage(): void {
    sessionStorage.removeItem('user');
  }

  public setIsLogged(value: boolean) {
    this.$isLogged.next(value);
  }

  public getIsLogged(): Observable<boolean> {
    return this.$isLogged.asObservable();
  }

  public getUserFromSessionStorage(): void {

  }

  public setUserToSessionStorage(resUser: any): void {
    const user: IUser = {
      uid: resUser.uid,
      email: resUser.email,
    }
    sessionStorage.setItem('user', JSON.stringify(user));
  }


  public signIn(user: IPreUser): Promise<any> {
    return this._angularAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  public signOut(): Promise<void> {
    this.removeUserFromSessionStorage();
    return this._angularAuth.signOut();
  }

  public signUp(user: IPreUser): Promise<any> {
    return this._angularAuth.createUserWithEmailAndPassword(user.email, user.password!);
  }

}
