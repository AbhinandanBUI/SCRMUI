import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcomsRoutingModule } from './ecoms-routing.module';
import { EcomsComponent } from './ecoms.component';
import { EcomDashboardComponent } from './ecom-dashboard/ecom-dashboard.component';
import { EcomAddProductComponent } from './ecom-add-product/ecom-add-product.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbRadioModule, NbSelectModule, NbToastrService, NbUserModule } from '@nebular/theme';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { RouterModule } from '@angular/router';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { EcomImageUploaderComponent } from './ecom-image-uploader/ecom-image-uploader.component';
 

@NgModule({
  declarations: [
    EcomsComponent,
    EcomDashboardComponent,
    EcomAddProductComponent,
    EcomImageUploaderComponent
  ],
  imports: [
    CommonModule,
    EcomsRoutingModule,
    ThemeModule,
    RouterModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
   NbListModule,
    NbIconModule,
    
    // ngFormsModule,
  
  ]
})
export class EcomsModule { }
