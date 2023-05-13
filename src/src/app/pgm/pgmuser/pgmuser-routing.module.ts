import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { PGMUserDashboardComponent } from './pgmuser-dashboard/pgmuser-dashboard.component';
import { PGMUserFoodComponent } from './pgmuser-food/pgmuser-food.component';
import { PGMUserPaymentHistoryComponent } from './pgmuser-payment-history/pgmuser-payment-history.component';
import { PGMUserComponent } from './pgmuser.component';

const routes: Routes = [{
  path: '',
  component: PGMUserComponent,
  children: [
    {
      path: 'Dashboard',
      component: PGMUserDashboardComponent,
    },
    {
      path: 'PaymentHistory',
      component: PGMUserPaymentHistoryComponent,
    },
    {
      path: 'Food',
      component: PGMUserFoodComponent,
    },
  
    {
      path: '',
      redirectTo: 'Dashboard',
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
export class PGMUserRoutingModule { }
