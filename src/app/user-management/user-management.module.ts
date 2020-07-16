import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
// import { DragDropModule } from 'primeng/dragdrop';
// import { FileUploadModule } from 'primeng/fileupload';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { SharedUserDetailsService } from './shared-user-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    UserManagementRoutingModule,
    FormsModule,
    // DragDropModule,
    ReactiveFormsModule,
    // FileUploadModule
  ],
  declarations: [UserDetailsComponent],
  providers: [SharedUserDetailsService]
})
export class UserManagementModule { }
