import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  /**
   * PROPERTIES
   */
  private confirmation$ = new Subject<boolean>;

  constructor() { }


  public setConfirmation(value: boolean): void {
    this.confirmation$.next(value);
  }

  public getConfirmation(): Observable<boolean> {
    return this.confirmation$.asObservable();
  }

}
