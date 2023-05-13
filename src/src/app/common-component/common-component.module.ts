import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAccordionModule, NbAlertModule, NbBadgeModule, NbButton, NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbInputModule, NbListModule, NbMenuModule, NbStepperModule, NbTableModule, NbTabsetModule, NbTreeGridModule, NbWindowModule, NbWindowRef } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    HttpClientModule,
    RouterModule,
    NbBadgeModule,
    NbAccordionModule,
    NbFormFieldModule,
    NbAlertModule,
    NbStepperModule,
    NbListModule,
    NbInputModule,
    NbTableModule,
    NbTabsetModule,
    NbDatepickerModule,
    NbTreeGridModule,
    NbMenuModule,
    ThemeModule,
    ReactiveFormsModule,
    // childern component
    NbWindowModule.forRoot(),
    NbDialogModule.forRoot(),
    Ng2SmartTableModule,
    // NbAccordionModule



  ],
  exports:[
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbBadgeModule,
    NbAccordionModule,
    NbFormFieldModule,
    NbAlertModule,
    NbStepperModule,
    NbListModule,
    NbInputModule,
    NbTableModule,
    NbTabsetModule,
    NbDatepickerModule,
    NbTreeGridModule,
    NbMenuModule,
    ThemeModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],


})
export class CommonComponentModule { }
