import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PGMOwnerRoutingModule } from './pgmowner-routing.module';
import { PGMOwnerComponent } from '../pgmowner/pgmowner.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerPaymentHistoryComponent } from './owner-payment-history/owner-payment-history.component';
import { CommonComponentModule } from '../../common-component/common-component.module';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';

import { AddNewTenantComponent } from './add-new-tenant/add-new-tenant.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { ServiceModule } from '../../service/service.module';


@NgModule({
  declarations: [
    PGMOwnerComponent,
    OwnerDashboardComponent,
    OwnerPaymentHistoryComponent,
    AddNewTenantComponent,
    TenantListComponent
  ],
  imports: [
    CommonModule,
    PGMOwnerRoutingModule,
    CommonComponentModule,
    ServiceModule,
    NbWindowModule.forChild(),
    NbDialogModule.forChild(),
  ]
})
export class PGMOwnerModule { }
