import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent],
  providers: [SpinnerService],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }