import { Component, ViewChildren, QueryList, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationError, NavigationCancel, ActivationStart } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { AuthService } from './services/auth.service';
import { SessionStorage } from './session-storage/session.storage';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isMobileView;
  isTabletView;
  isExpanded;
  subscriptionMedia;
  isSessionTimeOut;
  idleTimeOut;
  public data: any = [];

  public userEmail$: Observable<string>;
  constructor(private cdr: ChangeDetectorRef, private location: Location, private authService: AuthService,
    private router: Router,
    public media: ObservableMedia,
    private sessionStorage: SessionStorage
    ) {
      // this.userEmail$ = this.authService.getUserEmail$();
      // console.log(this.authService.getUserEmail$());
      // this.authService.getUserEmail$().subscribe((user)=>{
      //   console.log(user);
      // })
  }

    ngOnInit(): void {
      this.idleTimeOut = environment.idleTimeOut;
      if (navigator.userAgent.indexOf('Chrome') === -1) {
          this.router.navigate(['unsupported-browser']);
          return;
      } else {
          this.isExpanded = true;
          this.isSessionTimeOut = false;
          this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm'));
          this.isTabletView = (this.media.isActive('md') || this.media.isActive('lg'));

          this.subscriptionMedia = this.media.subscribe((change: MediaChange) => {
              this.isMobileView = (change.mqAlias === 'xs' || change.mqAlias === 'sm');
              this.isTabletView = (change.mqAlias === 'md' || change.mqAlias === 'lg');
          });

          // if (this.authService.isAuthenticated) {
              /* const roles = ['CTMSupervisor', 'Shipper', 'CTMOrderShipmentViewOnly',
          'ImportApprover', 'CTMPrinter', 'CTMQCer', 'CTMPreKitterNonExpiry', 'ShipperSupervisor',
          'ProjectServicesUser', 'CTMPreKitterExpiry', 'CTMAssembler']; */
              // const roles = this.authService.getUserRoles || [];
              const roles = [
                  "CTMSupervisor",
                  "Shipper",
                  "CTMOrderShipmentViewOnly",
                  "ImportApprover",
                  "CTMPrinter",
                  "CTMQCer",
                  "CTMPreKitterNonExpiry",
                  "ShipperSupervisor",
                  "ProjectServicesUser",
                  "CTMPreKitterExpiry",
                  "CTMAssembler",
                  "ManualBillingAdd",
                  "BillingSU",
                  "Manpullreqadd"
              ];
          // }
          // console.log('user Roles: ', this.ngxRolesService.getPermissions());
      }
  }

  isExpandedChange(event) {
    this.isExpanded = event;

  }

  logout() {
    this.sessionStorage.setSessionStorageValue("isIdleTimeOut", "no");
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate([this.authService.LOGIN_PATH]);
      });
  }

  public handleInactivityCallback() {
    // Sign out current user or display specific message regarding inactivity
    // alert("coming to handleinactivitiycallback");
    this.isSessionTimeOut = true;
    this.sessionStorage.setSessionStorageValue("isIdleTimeOut", "yes");
    localStorage.removeItem('currentSortforList');
    localStorage.removeItem('currentSortDirforList');
    localStorage.removeItem('selectedStudies');
    localStorage.removeItem('eventsStudies');
    localStorage.removeItem('teamView');
    this.authService.logout();
}

}
