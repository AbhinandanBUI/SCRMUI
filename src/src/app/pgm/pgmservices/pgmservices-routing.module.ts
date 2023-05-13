import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { PGMServicesDashboardComponent } from './pgmservices-dashboard/pgmservices-dashboard.component';
import { PGMServicesPaymentHistoryComponent } from './pgmservices-payment-history/pgmservices-payment-history.component';
import { PGMServicesTodayFoodMakingComponent } from './pgmservices-today-food-making/pgmservices-today-food-making.component';
import { PGMServicesComponent } from './pgmservices.component';

const routes: Routes = [{
  path: '',
  component: PGMServicesComponent,
  children: [
     {
      path:'Dashboard',
      component:PGMServicesDashboardComponent
     },
     {
      path:'PaymentHistory',
      component:PGMServicesPaymentHistoryComponent
     },
     {
      path:'Food',
      component:PGMServicesTodayFoodMakingComponent
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
export class PGMServicesRoutingModule { }
