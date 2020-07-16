import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements AfterViewInit {
  showSpinnerFlag: boolean;

  constructor(public spinnerService: SpinnerService,
    private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.spinnerService.getSpinnerInfo.subscribe(spinnerInfo => {
      // console.log(spinnerInfo.fullLoadingCount);
      if (spinnerInfo.fullLoadingCount > 0) {
        if (this.showSpinnerFlag !== true) {
           this.showSpinnerFlag = true;
        }
      } else {
        this.showSpinnerFlag = false;
      }
      this.changeDetector.detectChanges();
    });
    
  }
}