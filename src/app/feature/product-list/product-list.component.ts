import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Interfaces/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[
    {
      id:1,
      title:'cover',
      price:90,
    },
    {
      id:2,
      title:'cover2',
      price:909
    },{
      id:3,
      title:'cover5',
      price:904
    }
  ]
  constructor() { 
    setTimeout(() => {
      console.log("products",this.products)
    }, 3200);
  }

  ngOnInit(): void {
  }

}
