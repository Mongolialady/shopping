import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/common';


import { Product, ProductService } from "./product.service";
import {CartComponent} from '../cart/cart.component'
import {eventbus} from "../event/eventbus";


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
  
  constructor(@Inject(DOCUMENT) private document: Document, private productService: ProductService) { 
    console.log("this.document.location.href: " + this.document.location.href);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }


  public addProductToCart(product:Product){
    eventbus.publish("addProduct",product);
  }

  public removeProductFromCart(product: Product) {
    eventbus.publish("removeProductFromCart", product);
  }
}
