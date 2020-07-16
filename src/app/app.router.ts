
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { ConfirmComponent } from './containers/confirm/confirm.component';


export const router: Routes = [
  { path: '', redirectTo: 'userinfo', pathMatch: 'full' },
 
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactusComponent, canActivate:[AuthGuard]},
  { path: 'userinfo', component: UserInfoComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'confirm', component: ConfirmComponent,
    canActivate: [AuthGuard]
  },
  { path: 'user-management', loadChildren: './user-management/user-management.module#UserManagementModule',
      data: {screenName: 'User Management'}
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);