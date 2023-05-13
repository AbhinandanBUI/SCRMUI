import { Component, OnInit } from '@angular/core';
import { PGM_user_MENU_ITEMS } from '../pgm-menu';

@Component({
  selector: 'ngx-pgmuser',
  templateUrl: './pgmuser.component.html',
  styleUrls: ['./pgmuser.component.scss']
})
export class PGMUserComponent     {

  menu = PGM_user_MENU_ITEMS;
}
