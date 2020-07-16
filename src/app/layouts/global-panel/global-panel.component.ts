import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Overlay, OverlayContainer, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective, Portal, ComponentPortal } from '@angular/cdk/portal';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, ActivationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { GlobalPanelService } from './global-panel.service';
// import { ContextMetaInfo } from '../../../context/context-meta-info.model';
// import { ContextService } from '../../../context/context.service';
// import { AttachmentService } from './attachment/attachment.service';
// import { AttachmentData, AttachmentType } from './attachment/attachment-model';
import { oprStatusResponse } from '../../constants/error-conts';

@Component({
  selector: 'app-global-panel',
  templateUrl: './global-panel.component.html',
  styleUrls: ['./global-panel.component.scss']
})
export class GlobalPanelComponent implements OnInit {
  showComponent: string;
  @ViewChild('sidenav') sidenavOrigin: any;
  @ViewChild('sidenavTemplate') sidenavTemplate: TemplatePortalDirective;

  isAuditVisible: boolean;
  isAttachmentVisible: boolean;
  isReportVisible: boolean;
  entityId;
  private entityInfo;
  private screenName: string;
  private path: string;
  private reportEntity;
  isViewEdit: string;
  // contextInfo: ContextMetaInfo;
  overlayRef;
  menuState = 'out';
  attachmentCount: string;
  showDefaultList = true;
  checkQCScreens = 'CTM Order QC';

  constructor(public overlay: Overlay,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalPanelService: GlobalPanelService,
    // private contextService: ContextService,
    // private attachmentService: AttachmentService,
    private elemRef: ElementRef) { }

  ngOnInit() {
    // this.contextService.getContextInfo.subscribe(context => {
    //   this.contextInfo = context;
    //   this.entityId = this.contextInfo.entityId;
    //   this.entityInfo = this.contextInfo.entityInfo;
    //   this.isViewEdit = this.contextInfo.isViewEdit;
    //   console.log(this.isViewEdit);
    //   if (this.entityId && this.isAttachmentVisible) {
    //     this.getAttachmentCount();
    //   }
    //   this.closeGlobalPanel();
    // });


    this.router.events.filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        this.showDefaultList = false;
        // this.contextService.clearContext();
        this.path = event.url;
        this.isAttachmentVisible = false;
        this.isAuditVisible = false;
        this.isReportVisible = false;
        this.closeGlobalPanel();
      });


    this.router.events.subscribe((routerEvent: any) => {
      this.checkRouterEvent(routerEvent);
    });

  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof ActivationStart) {
      if (routerEvent.snapshot.data.screenName) {
        this.screenName = routerEvent.snapshot.data['screenName'];
        this.showIconList(this.screenName);
      }
    }
  }

  showIconList(screenName) {


    const attachmentVisible = this.globalPanelService.getAttachmentVisibility(screenName);
    this.isAttachmentVisible = attachmentVisible || false;

  }

  showChildComponent(childName) {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
    if (childName === this.showComponent) {
      this.overlayRef.detach();
      this.showComponent = null;
    } else {
      const strategy = this.overlay.position()
        .connectedTo(
          this.sidenavOrigin.elementRef,
          { originX: 'start', originY: 'top' },
          { overlayX: 'end', overlayY: 'top' });
      this.showComponent = childName;
      const config = new OverlayConfig({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy: strategy,
        height: '100%',
        // width: '40%',
      });
      this.overlayRef = this.overlay.create(config);
      this.overlayRef.attach(this.sidenavTemplate);
      this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    }
  }

  getAttachmentCount() {
    // this.attachmentCount = null;
    // const attachmentInfo: AttachmentData = new AttachmentData();
    // attachmentInfo.AttachmentType = AttachmentType.two;
    // attachmentInfo.EntityGuid = this.entityId;
    // this.attachmentService.getAttachmentsCount(attachmentInfo).subscribe(res => {
    //   if (res.oprStatus === oprStatusResponse.success) {
    //     this.attachmentCount = res.attachmentsCount;
    //   } else {
    //     if (res.oprStatus === oprStatusResponse.invalidRequest) {
    //       this.attachmentCount = null;
    //     }
    //   }
    // }, error => {
    //   this.attachmentCount = null;
    // });
  }

  closeGlobalPanel() {
    this.attachmentCount = null;
    if (this.overlayRef && !this.isAttachmentVisible && !this.isAuditVisible && !this.isReportVisible) {
      this.overlayRef.detach();
    }
  }

}
