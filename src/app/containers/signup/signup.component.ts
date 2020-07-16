import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../notification/notification.service';
import { NotificationType, NotificationData } from '../../notification/notification-model';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../auth.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  notifyModel = new NotificationData;

  constructor(private authService: AuthService,
    private notification: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  get f() { return this.signupForm.controls; }

  signup() {
    this.authService.signup(
      {
        email: this.f.email.value,
        password: this.f.password.value
      }
    ).subscribe(response => {
      this.showNotification(response['message'], response['status']);
      this.router.navigate([this.authService.CONFIRM_PATH]);
      });
  }

  showNotification(message: string, type?, timeOut?) {
    const InfoNotification = this.notifyModel;
    const ResponseNotification = this.notifyModel;
    ResponseNotification.messageType = type;
    if (!timeOut) {
      ResponseNotification.timeout = 2000;
    }
    InfoNotification.message = message;
    this.notification.showNotifications(InfoNotification);
  }
}
