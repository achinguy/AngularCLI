import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
// import { kitRoles, ShipmentRoles, DCPortalSupportRoles } from './../../../../userRoles.model';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  @Input() isExpanded;
  @Input() isMobileView;
  @Input() sidenav;
  redirectToOutSystem: string;
  redirectToPortalSupport: string;
  constructor() { } 

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    const  list: any = document.querySelectorAll('.sideBar-nav-links');
    list.forEach( a  =>  {
      a.removeAttribute('tabindex');
    });
  }
  closeSideNav() {
    if (this.isMobileView) {
      this.sidenav.close();
    }
  }

}
