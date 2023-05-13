import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ToastrComponent } from '../../pages/modal-overlays/toastr/toastr.component';
import { PGM_owner_MENU_ITEMS } from '../pgm-menu';

@Component({
  selector: 'ngx-pgmowner',
  templateUrl: './pgmowner.component.html',
  styleUrls: ['./pgmowner.component.scss']
})
export class PGMOwnerComponent  {
 
constructor(private _toaster:NbToastrService) {
  setInterval(() => {
    // this.notifyme()
  }, 1500);
  
}
  menu = PGM_owner_MENU_ITEMS;


 

   notifyme(){
    this._toaster.danger('no items left here !','Abhinandan Services')
    }

}
