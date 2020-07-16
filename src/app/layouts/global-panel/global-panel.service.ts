import { Injectable, OnInit } from '@angular/core';
import * as data from '../../../assets/json/global-req-config.json';
/*TODO: Demo import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../../security/services/auth.service'; */


@Injectable()
export class GlobalPanelService {
  constructor(
   /*TODO: Demo  private http: HttpClient
    private authService: AuthService */
  ) { }

  getAttachmentVisibility(screenName: string) {
    const panelData = (<any>data);
    const globalConfigData = panelData.GlobalRequirementConfig.filter(d => d.screenName === screenName);
    if (globalConfigData.length > 0) {
      const globalPanalItems = globalConfigData[0].globalPanalItems[0];
      if (globalPanalItems) {
        return globalPanalItems.isAttachementEnabled;
      } else {
        return null;
      }
    } else {
      return null;
    }

  }
}