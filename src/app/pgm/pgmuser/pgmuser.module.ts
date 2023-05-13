import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PGMUserRoutingModule } from './pgmuser-routing.module';
import { PGMUserComponent } from '../pgmuser/pgmuser.component';
import { PGMUserDashboardComponent } from './pgmuser-dashboard/pgmuser-dashboard.component';
import { PGMUserPaymentHistoryComponent } from './pgmuser-payment-history/pgmuser-payment-history.component';
import { PGMUserFoodComponent } from './pgmuser-food/pgmuser-food.component';
import { CommonComponentModule } from '../../common-component/common-component.module';


@NgModule({
  declarations: [
    PGMUserComponent,
    PGMUserDashboardComponent,
    PGMUserPaymentHistoryComponent,
    PGMUserFoodComponent
  ],
  imports: [
    CommonModule,
    PGMUserRoutingModule,
 
   
     
     CommonComponentModule
  ]
})
export class PGMUserModule { }
