import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../pages/layout/news.service';

@Component({
  selector: 'ngx-ecom-add-product',
  templateUrl: './ecom-add-product.component.html',
  styleUrls: ['./ecom-add-product.component.scss']
})
export class EcomAddProductComponent implements OnInit {

  
  
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;
  constructor( ) {}
ngOnInit(): void {
  
}

  
}
