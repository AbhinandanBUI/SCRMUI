import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { AddNewTenantComponent } from './add-new-tenant/add-new-tenant.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerPaymentHistoryComponent } from './owner-payment-history/owner-payment-history.component';
import { PGMOwnerComponent } from './pgmowner.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';

const routes: Routes = [{
  path: '',
  component: PGMOwnerComponent,
  children: [
    {
      path: 'Dashboard',
      component: OwnerDashboardComponent,
    },
    {
      path: 'PaymentHistory',
      component: OwnerPaymentHistoryComponent,
    },
    {
      path: 'NewTenant',
      component: AddNewTenantComponent,
    },
    {
      path: 'tenantList',
      component: TenantListComponent,
    },
    // {
    //   path: 'Food',
    //   component: PGMUserFoodComponent,
    // },
  
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
export class PGMOwnerRoutingModule { }
