import { Component, OnInit, Input, EventEmitter, Output, ReflectiveInjector } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute, ActivationStart, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav;
  @Input() isExpanded;
  @Input() isTabletView;
  @Output() expandchange: EventEmitter<boolean> = new EventEmitter();
  screenName: any;
  public userEmail$: Observable<string>;

  constructor(private authService: AuthService,
    private router: Router,  private route: ActivatedRoute) { 
      
    }

  ngOnInit() {
    this.userEmail$ = this.authService.getUserEmail$();
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof ActivationStart) {
      if (routerEvent.snapshot.data.screenName) {
        this.screenName = routerEvent.snapshot.data['screenName'];
        console.log('screenname:' + this.screenName);

        // added for sending Module-Name in RequestHeader for Hurl messages changes - End
       
      }
    }
  }
  addHttp(url) {
    if (!/^(ht)tps?:\/\//i.test(url)) {
      url = 'http://' + url;
    }
    return url;
  }
  toggleSidebar() {
    if (this.isTabletView) {
      // TODO: console.log(this.isExpanded);
      this.isExpanded = !this.isExpanded;
      this.expandchange.emit(this.isExpanded);
    } else {
      this.sidenav.open();
    }
  }
  login() {
    console.log('Header Log in')
    //this.authService.login();
  }

  logOut() {
    // this.sessionStorage.setSessionStorageValue('isIdleTimeOut', 'no');
    localStorage.removeItem('currentSortforList');
    localStorage.removeItem('currentSortDirforList');
    localStorage.removeItem('selectedStudies');
    localStorage.removeItem('eventsStudies');
    localStorage.removeItem('teamView');
    // this.router.navigate(['welcome']);
    this.authService.logoutAndRedirectToLogin();
  }
  public get isLoggedIn() {
    return this.authService.isLoggedIn$;
  }

}
