import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SrcmRoutingModule } from './srcm-routing.module';
import { SrcmComponent } from './srcm.component';
import { SrcmDashboardComponent } from './srcm-dashboard/srcm-dashboard.component';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    SrcmComponent,
    SrcmDashboardComponent
  ],
  imports: [
    CommonModule,
    SrcmRoutingModule,
    CommonComponentModule
  ]
})
export class SrcmModule { }
