import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Interfaces/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products:Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
