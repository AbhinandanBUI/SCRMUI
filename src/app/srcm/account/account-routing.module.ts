import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: AccountComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent,
    },
    {
      path: '',
      redirectTo: 'login',
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
export class AccountRoutingModule { }
