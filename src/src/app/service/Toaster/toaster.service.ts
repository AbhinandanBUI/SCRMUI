import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private _toaster:NbToastrService) { }




  login(username:string){
     this._toaster.success('Successfully login'+' '+username,'Login');
  }
  logout(username:string){
     this._toaster.success('Successfully logout'+' '+username,'Logout');
  }
  SuccessMessage(){

  }

  ToastMe(position:any,type:string,title:any,msg:any){
    this._toaster.show(msg,title,
      {
        duration:2000,
        destroyByClick:true,
        status:type,
       position:position
      }
      )
  }

}
