import { Component, OnInit } from '@angular/core';
import { PGM_services_MENU_ITEMS } from '../pgm-menu';

@Component({
  selector: 'ngx-pgmservices',
  templateUrl: './pgmservices.component.html',
  styleUrls: ['./pgmservices.component.scss']
})
export class PGMServicesComponent  {
  menu = PGM_services_MENU_ITEMS;
}

