import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Optional, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { RouterModule } from '@angular/router';
// import { NgxInactivity } from 'ngx-inactivity';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { MyHighlighter } from './app.highlighter';

import { ProductComponent } from './product/product.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationService } from './notification/notification.service';
import { NewlinePipe } from './pipes/newline.pipe';
import { NotificationComponent } from './notification/notification.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonService } from './services/common.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpBackend, ɵHttpInterceptingHandler } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerModule } from './spinner/spinner.module';
import { SpinnerInterceptor } from './http-interceptors/spinner.interceptor';
import { AuthInterceptor } from './http-interceptors/auth.interceptor';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { ConfirmComponent } from './containers/confirm/confirm.component';
import { AuthService } from './services/auth.service';
import { authStrategyProvider } from './services/auth.strategy';
import { HeaderComponent } from './layouts/header/header/header.component';
import { LeftNavComponent } from './layouts/LeftNav/left-nav/left-nav.component';
import { MaterialModule } from './material.component';
import { FooterComponent } from './layouts/footer/footer/footer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppHttpClient } from './http-client-extensions/app-http-client';
import { AppHttpHandler } from './http-client-extensions/app-http-handler';
import { InfraHttpClient } from './http-client-extensions/infra-http-client';
import { InfraHttpHandler } from './http-client-extensions/infra-http-handler';
import { SessionStorage } from './session-storage/session.storage';
import {SESSION_STORAGE, StorageServiceModule} from 'angular-webstorage-service';
import { SharedUserDetailsService } from './user-management/shared-user-details.service';

// import { App_HTTP_INTERCEPTORS } from './http-client-extensions/app-http-handler';
import {
  APP_HTTP_INTERCEPTORS, infraHttpInterceptorProviders,
  INFRA_HTTP_INTERCEPTORS, appHttpInterceptorProviders
} from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,
    LoginComponent,
    ConfirmComponent,
    SignupComponent,
    MyHighlighter,
    ProductComponent,
    UserInfoComponent,
    NotificationComponent,
    NewlinePipe,
    ConfirmationComponent,
    HeaderComponent,
    LeftNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    SpinnerModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    OverlayModule,
    // NgxInactivity,
    StorageServiceModule
  ],
  providers: [AppHttpClient, UserService, AuthGuard, CommonService, SessionStorage, NotificationService, SpinnerService, AuthService, authStrategyProvider,
    // { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: AppHttpHandler,
      useFactory: ɵHttpInterceptingHandler,
      deps: [HttpBackend, [new Optional(), new Inject(INFRA_HTTP_INTERCEPTORS)]],
    },
    infraHttpInterceptorProviders,
    appHttpInterceptorProviders,
    InfraHttpClient,
    {
      provide: InfraHttpHandler,
      useFactory: ɵHttpInterceptingHandler,
      deps: [HttpBackend, [new Optional(), new Inject(APP_HTTP_INTERCEPTORS)]],
    },
    SharedUserDetailsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [NotificationComponent, ConfirmationComponent],

})
export class AppModule { }
