import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { oprStatusResponse } from '../../constants/error-conts';
import { NotificationType, NotificationData } from '../../notification/notification-model';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../auth.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  notifyModel = new NotificationData;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notification: NotificationService) { }

  ngOnInit() {
    this.errorMessage = '';
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        email: this.f.email.value,
        password: this.f.password.value
      }
    ).subscribe(res => {
      if (res['OprStatus'] == oprStatusResponse.invalidRequest){
        this.showNotification( res['message'], NotificationType.error);
        this.errorMessage = res['message'];
      } else {
        this.router.navigate([this.authService.getInitialPathForRole('READER')]);
      }
    });
  }

  showNotification(message: string, type?, timeOut?) {
    const InfoNotification = this.notifyModel;
    const ResponseNotification = this.notifyModel;
    ResponseNotification.messageType = type;
    if (!timeOut) {
      ResponseNotification.timeout = 518500;
    }
    InfoNotification.message = message;
    this.notification.showNotifications(InfoNotification);
  }

}
