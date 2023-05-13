import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';
import { ToasterService } from './Toaster/toaster.service';
import { WindowService } from './Window/window.service';
import { DialongService } from './Dialong/dialong.service';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    NbDialogModule.forChild( ),
  ],
  providers:[ToasterService,WindowService,DialongService]
})
export class ServiceModule { }
