import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { FormControl, FormGroup, FormArray, Validators, RequiredValidator, } from '@angular/forms';
import { NotificationService } from '../notification/notification.service';
import { NotificationType, NotificationData } from '../notification/notification-model';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';
import { SharedUserDetailsService } from '../user-management/shared-user-details.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  Repdata: any;
  valbutton = "Save";
  errorMessage: any;
  id: string;
  name: string;
  address: string;
  userForm: FormGroup;
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'address', 'actions'];
  notifyModel = new NotificationData;
  filteredName: Observable<any[]>;
  nameDetails: any = [];
  pageCount: number;
  pageSize: any;
  paginationData: any;
  samples: [5, 10, 20];
  searchText: any;

  constructor(private newService: CommonService,
    private notification: NotificationService,
    public dialog: MatDialog,
    private spinnerService: SpinnerService,
    private sharedUserDetailsService: SharedUserDetailsService,
    private router: Router ) {
  }

  ngOnInit() {
    this.pageCount = 1;
    this.pageSize = '5';
    this.paginationData = { TotalPageCount: 0 };
    this.valbutton = "Save";
    this.userForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }),
      address: new FormControl({ value: '', disabled: false })
    });
    this.spinnerService.showSpinner();
    this.callUserDetails(this.pageCount);
    this.spinnerService.hideSpinner();
  }

  callUserDetails(pageCount) {
    this.newService.GetUser(pageCount, this.pageSize, this.searchText).subscribe(data => {
      this.paginationData = JSON.parse(data.headers.get('Pagination-Headers'));
      console.log(this.paginationData);
      console.log(this.paginationData.TotalPageCount);
      let users = data.body;
      this.Repdata = users;
      this.dataSource.data = users;
      this.nameDetails = users;
      this.filteredName = this.userForm.controls.name.valueChanges.pipe(startWith(''),
        map(name => name ? this.filterName(name) : this.nameDetails.slice()));
    })
  }
  filterName(name: string) {
    if (typeof name !== 'object') {
      return this.nameDetails.filter(cname =>
        cname.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
  }

  filterNameObj(site) {
    return (site ? typeof site !== 'object' ? site : site.name : '');
  }

  onSave(user) {
    user.mode = this.valbutton;
    this.newService.saveUser(user)
      .subscribe(data => {
        this.ngOnInit();
        this.showNotification('Data updated succesfully', NotificationType.success);
      },
        error => {
          this.errorMessage = error
          this.showNotification(error, NotificationType.error);
        })
  }

  edit(row, event) {
    event.target.classList.remove('img-edit');
    this.id = row.id;
    this.name = row.name;
    this.address = row.address;
    this.valbutton = "Update";
    row.isEdit = true;
  }

  cancel(row, event) {
    event.target.classList.add('img-edit');
    row.isEdit = false;
  }

  delete(element) {
    const target = new ElementRef(event.currentTarget);
    const data = {
      trigger: target,
      info: false,
      message: 'Are you sure you want to delete?'
    }
    this.dialog.open(ConfirmationComponent, {
      data: data,
      autoFocus: false,
      width: '70%',
      height: '20%'
    }).afterClosed().subscribe(res => {
      if (res && res !== 'No') {
        this.newService.deleteUser(element.id)
          .subscribe(data => {
            alert(data.data);
            this.ngOnInit();
          },
            error => this.errorMessage = error)
      }

    });

  }

  showNotification(message: string, type?, timeOut?) {
    const InfoNotification = this.notifyModel;
    const ResponseNotification = this.notifyModel;
    ResponseNotification.messageType = type;
    if (!timeOut) {
      ResponseNotification.timeout = 518500;
    }
    InfoNotification.message = message;
    this.notification.showNotifications(InfoNotification);
  }

  onSiteSelection(event) {

  }

  moveTestDetails(direction) {
    if (direction === 'prev') {
      // tslint:disable-next-line:no-unused-expression
      this.pageCount = this.pageCount - 1
      this.callUserDetails(this.pageCount);

    } else if (direction === 'next') {
      // tslint:disable-next-line:no-unused-expression
      this.pageCount = this.pageCount + 1
      this.callUserDetails(this.pageCount);
    }
  }

  onPageSizeChange(event, value) {
    this.pageSize = value;
    this.callUserDetails(this.pageCount);
  }

  apiSearchTest(){
    this.callUserDetails(1);
  }

  showUserDetails(user) {
    const currentUser = user;
    this.sharedUserDetailsService.setUser(currentUser);
    this.router.navigate(['/user-management/user-details/']);

  }
}
