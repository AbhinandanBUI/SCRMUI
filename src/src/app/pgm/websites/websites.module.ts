import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesComponent } from './websites.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
import { WebsiteAboutusComponent } from './website-aboutus/website-aboutus.component';
import { WebsiteContactusComponent } from './website-contactus/website-contactus.component';
import { WebsiteDetailsComponent } from './website-details/website-details.component';
import { RouterModule } from '@angular/router';
import { CommonComponentModule } from '../../common-component/common-component.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    WebsitesComponent,
    WebsiteHomeComponent,
    WebsiteAboutusComponent,
    WebsiteContactusComponent,
    WebsiteDetailsComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    WebsitesRoutingModule,
    CommonComponentModule,
    RouterModule
  ]
})
export class WebsitesModule { }
