import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-scrm',
  templateUrl: './scrm.component.html',
  styleUrls: ['./scrm.component.scss']
})
export class SCRMComponent implements OnInit {


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  headerRouting(link: string) {
    debugger
    switch (link) {
      case 'About_US':
        this._router.navigateByUrl('/PGM/PG/About_US');
        break;
      case 'Contact_US':
        this._router.navigateByUrl('/PGM/PG/Contact_US');
        break;
      case 'Login':
        this._router.navigateByUrl('/PGM/PG/Login');
        break;
      case 'Registration':
        this._router.navigateByUrl('/PGM/PG/Registration');
        break;
      default:
        this._router.navigateByUrl('/PGM/PG')
        break;
    }

  }
}
