import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'ngx-ecoms',
  templateUrl: './ecoms.component.html',
  styleUrls: ['./ecoms.component.scss']
})
export class EcomsComponent implements OnInit {

  constructor() { }
title="Admin Panel"
  ngOnInit(): void {
  }
  menu = MENU_ITEMS;

}
