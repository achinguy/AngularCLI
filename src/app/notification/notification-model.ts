import { NotificationService } from './notification.service';

export class NotificationModel { }

export class NotificationData {
    message?: string;
    showButton = true;
    timeout?: number ;
    returnMessage?: string ;
    closeAction: NotificationCloseActionType;
    titleMessage = 'Notification Alert';
    messageType: NotificationType;
    buttonText = 'Close';
    verticalPosition: NotificationVposition;
    horizontalPosition: NotificationHposition;

    constructor() {
        this.messageType = NotificationType.success;
        this.verticalPosition = NotificationVposition.bottom;
        this.horizontalPosition = NotificationHposition.right;
        this.closeAction = NotificationCloseActionType.manuallyClose;
    }
}

export enum NotificationHposition {
    left = 'left',
    center = 'center',
    right = 'right',
    start = 'start',
    end = 'end'
}

export enum NotificationVposition {
    top = 'top',
    bottom = 'bottom'
}

export enum NotificationType {
    success = 'Success',
    error = 'Error',
    info = 'Info',
    warning = 'Warning',
    kiterror = 'KitError'
}

export enum NotificationCloseActionType {
    autoClose = 'autoClosed',
    manuallyClose = 'manuallyClosed'
}