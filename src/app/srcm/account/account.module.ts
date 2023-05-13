import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AccountComponent } from './account.component';
import { CommonComponentModule } from '../../common-component/common-component.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    CommonComponentModule
  ]
})
export class AccountModule { }
