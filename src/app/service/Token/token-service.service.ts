import { Injectable } from '@angular/core';
import { LocalStorageService } from '../LocalStorage/local-storage.service';
import { Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor(private _storage: LocalStorageService, private _router: Router) { }

  SetToken(user, login, token) {
    debugger
    this._storage.setItem('user', user);
    this._storage.setItem('isLogin', login);
    this._storage.setItem('token', token);
  }
  getToken() {
    let data = this._storage.getItem('token');
    if (data) {
      return true;
    }
    else {
      return false;
    }
  }
  getUser() {
    return this._storage.getItem('user');

  } 
  makeLogin() {
    debugger
    let login = this.isLogin();
    if (login) {
      this._router.navigateByUrl('/scrm/school/Dashboard');
    } else {

    }
  }

  isLogin() {
    debugger
    let token = this._storage.getItem('token');
    let isLog = this._storage.getItem('isLogin');
    if (isLog == true && token) {
      return true;
    } else {
      return false;
    }
  }
  Logout() {
    this._storage.ClearStorage();
    this._router.navigateByUrl('scrm/account/login');
  }
}
