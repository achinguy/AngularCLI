import { Injectable } from '@angular/core';

@Injectable()
export class SharedUserDetailsService {

  constructor() { }

  userRoles: any;
  userData: any;
  isBackClicked = false;
  UserManagementData: any;

  setuserRoles(userRoles) {
    this.userRoles = userRoles;
  }

  setUser(User) {
    this.userData = User;
  }

  getUser() {
    return this.userData;
  }

  getuserRoles() {
    return this.userRoles;
  }

  setUserManagementData(data) {
    this.UserManagementData = data;
  }

  getUserManagementData() {
    return this.UserManagementData;
  }
}