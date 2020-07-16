import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  modalClass;
//   private readonly triggerElementRef: ElementRef;
//   private readonly _matDialogRef: MatDialogRef<ConfirmationComponent>;

  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        // this._matDialogRef = _matDialogRef;
        // this.triggerElementRef = data.trigger;
     }

  ngOnInit() {
    // const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    // const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    // matDialogConfig.position = { left: `${rect.left - 145}px`, top: `${rect.bottom + 5}px` };
    // this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    // this._matDialogRef.updatePosition(matDialogConfig.position);
  }

  closeModal(button: any) {
    this.dialogRef.close(button);
  }

}