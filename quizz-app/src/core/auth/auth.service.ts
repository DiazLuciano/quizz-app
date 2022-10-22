import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _angularAuth: AngularFireAuth) { }

  public signIn(email: string, password: string): Promise<unknown> {
    return this._angularAuth.signInWithEmailAndPassword(email, password);
  }
}
