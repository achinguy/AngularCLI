import { Component, ElementRef, OnInit, AfterViewInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormArray, Validators, RequiredValidator, } from '@angular/forms';
import { SharedUserDetailsService } from '../shared-user-details.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userData: any;UserDetailsComponent
  userDetailsForm: FormGroup;
  colors = ['red', 'green', 'white'];

  droped = [];

  dragedColor = null;

  
  constructor(private sharedUserDetailsService: SharedUserDetailsService) { 
    
  }

  ngOnInit() {
    this.userData = this.sharedUserDetailsService.getUser();
    this.userDetailsForm = new FormGroup({
      Id: new FormControl({ value: this.userData.Id, disabled: true }),
      Name: new FormControl({ value: this.userData.name, disabled: true }),
      Addess: new FormControl({ value: this.userData.address, disabled: true })
    });
  }

  dragStart(e, c) {
    this.dragedColor = c;
  }

  dragEnd(e) {
  }

  drop(e) {
    if (this.dragedColor) {
      this.droped.push(this.dragedColor);
      this.dragedColor = null;
    }
  }
}