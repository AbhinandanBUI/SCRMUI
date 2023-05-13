import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AuthComponent } from './auth.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentModule,
  ]
})
export class AuthModule { }
