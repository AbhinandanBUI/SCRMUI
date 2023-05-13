import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WebsiteAboutusComponent } from './website-aboutus/website-aboutus.component';
import { WebsiteContactusComponent } from './website-contactus/website-contactus.component';
import { WebsiteDetailsComponent } from './website-details/website-details.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
import { WebsitesComponent } from './websites.component';

const routes: Routes = [{
  path: '',
  component: WebsitesComponent,
  children: [
     {
      path:'',
      component:WebsiteHomeComponent
     },
     {
      path:'Details',
      component:WebsiteDetailsComponent
     },
     {
      path:'About_US',
      component:WebsiteAboutusComponent
     },
     {
      path:'Contact_US',
      component:WebsiteContactusComponent
     },
     {
      path:'Login',
      component:LoginComponent
     },
     {
      path:'Registration',
      component:RegistrationComponent
     },
     
    {
      path: '',
      redirectTo: 'PG',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitesRoutingModule { }
