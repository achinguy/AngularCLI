
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';


export const router: Routes = [
  { path: 'user-details', component: UserDetailsComponent }
];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class UserManagementRoutingModule { }