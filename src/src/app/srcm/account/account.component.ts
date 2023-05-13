import { Component, OnInit } from '@angular/core';
import { school_account } from '../srcm-menus';

@Component({
  selector: 'ngx-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent  {

  menu = school_account;
 

}
