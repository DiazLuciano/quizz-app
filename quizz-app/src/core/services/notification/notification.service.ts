import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  /**
   * SUCCESS
   *
   * @param message
   * @param title
   */
  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  /**
   * ERROR
   *
   * @param message
   * @param title
   */
  showError(message: string, title: string = 'Oops') {
    this.toastr.error(message, title);
  }

  /**
   * INFO
   *
   * @param message
   * @param title
   */
  showInfo(message: string, title: string) {
    this.toastr.info(message, title);
  }

  /**
   * WARNING
   *
   * @param message
   * @param title
   */
  showWarning(message: string, title: string) {
    this.toastr.warning(message, title);
  }
}
