import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';
import { NotificationCloseActionType, NotificationData } from './notification-model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: NotificationData,
  private snackBarRef: MatSnackBarRef<NotificationComponent>) { }

  ngOnInit() {
    this.data.closeAction = NotificationCloseActionType.autoClose;
  }

  onClose() {
    this.data.closeAction = NotificationCloseActionType.manuallyClose;
    this.snackBarRef.dismiss();
  }

}