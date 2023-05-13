import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ToasterService } from '../../../service/Toaster/toaster.service';
import { ToasterPosition } from '../../../service/Toaster/ToastConfig';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private toat:ToasterService,private _router:Router ) { }

  ngOnInit(): void {
    console.log("Login")
  }
  Login() {
    debugger
    if (this.LoginForm.valid) {
      if (this.LoginForm.controls['userid'].value == 'user' && this.LoginForm.controls['password'].value == 'sss' ) {
        this.toat.login("Login Success");
        this._router.navigateByUrl('/PGM/OWNER');
      }else{
        this.toat.ToastMe(ToasterPosition.TOP_LEFT,'danger','Failed','invalid login');

      }

    }
  }

}
