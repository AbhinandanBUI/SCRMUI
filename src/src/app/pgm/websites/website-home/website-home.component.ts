import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-website-home',
  templateUrl: './website-home.component.html',
  styleUrls: ['./website-home.component.scss']
})
export class WebsiteHomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  res(){
    this._router.navigateByUrl('/PGM/PG/Details')
  }
  
}
