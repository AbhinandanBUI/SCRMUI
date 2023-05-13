import { Component, OnInit } from '@angular/core';
import { school_Dashboard_Not_Active, school_menu_List } from '../srcm-menus';

@Component({
  selector: 'ngx-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  menu: any;
  constructor() {
    this.menu = school_menu_List

  }
  ngOnInit(): void {
    this.menu = school_Dashboard_Not_Active


  }



}
