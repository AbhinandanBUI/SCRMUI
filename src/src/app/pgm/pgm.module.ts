import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PGMRoutingModule } from './pgm-routing.module';
import { PGMComponent } from '../pgm/pgm.component';
import { RouterModule } from '@angular/router';
import { NbBadgeModule, NbCardModule, NbDialogModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [
    PGMComponent,

  ],
  imports: [
    CommonModule,
    PGMRoutingModule,
    ThemeModule,
    RouterModule,
    NbCardModule,
    NbBadgeModule,
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
  ]
})
export class PGMModule { }
