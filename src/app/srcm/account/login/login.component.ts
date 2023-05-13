
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MasterService } from '../../../service/master/master.service';
import { TokenServiceService } from '../../../service/Token/token-service.service';
import { ToasterService } from '../../../service/Toaster/toaster.service';
import { ToasterPosition } from '../../../service/Toaster/ToastConfig';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _toast: ToasterService,
    private _api: MasterService,
    private _tokenService: TokenServiceService) {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required,]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    if (username && password) {
      const data = {
        email: username,
        password: password
      }
      this._api.post('user', 'login', data).subscribe({
        next: response => {
          debugger
          console.log(response);
          this._tokenService.SetToken(response.responseData, true, response.token);
          this._tokenService.makeLogin();
          // this._nbToken.set(response.token);

          this._toast.ToastMe(ToasterPosition.TOP_LEFT, 'danger', 'Login', response.responseData.name);

        },
        error: err => {
          this._toast.ToastMe(ToasterPosition.TOP_LEFT, 'danger', 'Login', err.message);
        }
      })
      this._toast.login('Login');
    } else {
      this._toast.ToastMe(ToasterPosition.TOP_LEFT, 'warning', 'Login', 'username or password invalid')
    }
  }
}
