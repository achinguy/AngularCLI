import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerInfo } from './spinner.model';


@Injectable()
export class SpinnerService {
  public static fullLoadingCount = 0;

  private spinnerInfoStream: Subject<SpinnerInfo> = new Subject<SpinnerInfo>();
  getSpinnerInfo  = this.spinnerInfoStream.asObservable();
  private spinnerInfo;
  constructor() { }

  set SpinnerInfo(value) {
    this.spinnerInfo = value;
    this.spinnerInfoStream.next(this.spinnerInfo);
  }

  get SpinnerInfo() {
    return this.spinnerInfo;
  }

  clearSpinnerInfo() {
    this.spinnerInfo = null;
  }
/*
  getSpinnerCount(): number {
    return SpinnerService.fullLoadingCount;
  } */

  showSpinner(): void {
    SpinnerService.fullLoadingCount++;
    const serviceMetaInfo: SpinnerInfo = new SpinnerInfo();
    serviceMetaInfo.fullLoadingCount = SpinnerService.fullLoadingCount;
    this.SpinnerInfo = serviceMetaInfo;
  }

  hideSpinner(): void {
    SpinnerService.fullLoadingCount--;
    const serviceMetaInfo: SpinnerInfo = new SpinnerInfo();
    serviceMetaInfo.fullLoadingCount = SpinnerService.fullLoadingCount;
    this.SpinnerInfo = serviceMetaInfo;
  }

}