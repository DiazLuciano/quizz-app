import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject, Observable } from 'rxjs';
import { IUser } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Properties
   */
  private $isLogged = new Subject<boolean>;

  public setIsLogged(value: boolean) {
    this.$isLogged.next(value);
  }

  public getIsLogged(): Observable<boolean> {
    return this.$isLogged.asObservable();
  }

  constructor(private _angularAuth: AngularFireAuth) { }

  /** PUBLIC METHODS */


  public signIn(email: string, password: string): Promise<unknown> {
    return this._angularAuth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): Promise<void> {
    return this._angularAuth.signOut();
  }

  public signUp(user: IUser): Promise<unknown> {
    return this._angularAuth.createUserWithEmailAndPassword(user.email, user.password!);
  }
}
