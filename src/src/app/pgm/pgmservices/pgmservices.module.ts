import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PGMServicesRoutingModule } from './pgmservices-routing.module';
import { PGMServicesComponent } from '../pgmservices/pgmservices.component';
import { PGMServicesDashboardComponent } from './pgmservices-dashboard/pgmservices-dashboard.component';
import { PGMServicesPaymentHistoryComponent } from './pgmservices-payment-history/pgmservices-payment-history.component';
import { PGMServicesTodayFoodMakingComponent } from './pgmservices-today-food-making/pgmservices-today-food-making.component';
import { CommonComponentModule } from '../../common-component/common-component.module';


@NgModule({
  declarations: [
    PGMServicesComponent,
    PGMServicesDashboardComponent,
    PGMServicesPaymentHistoryComponent,
    PGMServicesTodayFoodMakingComponent
  ],
  imports: [
    CommonModule,
    PGMServicesRoutingModule,
    CommonComponentModule
  ]
})
export class PGMServicesModule { }
