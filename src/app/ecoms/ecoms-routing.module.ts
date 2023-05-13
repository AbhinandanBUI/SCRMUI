import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomAddProductComponent } from './ecom-add-product/ecom-add-product.component';
import { EcomDashboardComponent } from './ecom-dashboard/ecom-dashboard.component';
import { EcomImageUploaderComponent } from './ecom-image-uploader/ecom-image-uploader.component';
import { EcomsComponent } from './ecoms.component';

const routes: Routes = [{
  path: '',
  component: EcomsComponent,
  children: [
    {
      path: '',
      component: EcomDashboardComponent
    },
    {
      path: 'addproduct',
      component: EcomAddProductComponent,
    },
    {
      path: 'ecomImg',
      component: EcomImageUploaderComponent,
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcomsRoutingModule { }
