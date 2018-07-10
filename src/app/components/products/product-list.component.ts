import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product, ProductService } from "./product.service";
import {CartComponent} from '../cart/cart.component'

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  //styleUrls: ['./product-list.component.css']
  styles: [`
    .characters {list-style-type: none;}
    *.characters li {padding: 4px;cursor: pointer;}
  `]
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  private cart: CartComponent;
  
  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public addProductToCart(product:Product){
    this.cart.addProductToCart(product);
  }

}
