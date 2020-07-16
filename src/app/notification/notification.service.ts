import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MatSnackBarConfig } from '@angular/material';
import { NotificationComponent } from './notification.component';
import { NotificationData } from './notification-model';

@Injectable()
export class NotificationService {
  @Output() change: EventEmitter<string> = new EventEmitter();
  private snackBarRef: MatSnackBarRef<NotificationComponent>;

  constructor(
      private snackBar: MatSnackBar
  ) { }


  showNotifications(notificationData: NotificationData) {
    this.snackBarRef = this.snackBar.openFromComponent(NotificationComponent, this.stackbarConfig(notificationData));

    this.snackBarRef.afterDismissed().subscribe(() => {
      this.change.emit(notificationData.closeAction);
    });
  }

  private stackbarConfig(notificationData: NotificationData) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = notificationData.verticalPosition;
    config.horizontalPosition = notificationData.horizontalPosition;
    // this is for applying auto close snackbar time limt
    if (notificationData.timeout) {
      config.duration = notificationData.timeout;
    }
    // this for applying custome stylesheet
    if (notificationData.messageType) {
      config.panelClass = [notificationData.messageType];
    }
    // this is passing the data to the custom component
    config.data = notificationData;
    return config;
  }

}