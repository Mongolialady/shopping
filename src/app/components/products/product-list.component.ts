import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/common';


import { Product, ProductService } from "./product.service";
import {CartComponent} from '../cart/cart.component'
import {eventbus} from "../event/eventbus";
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';


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
  private category: string;
  private min: any;
  private max: any;
  
  constructor( private route: ActivatedRoute, private productService: ProductService) { 
  }

  public onPriceSearchHandler(event){
    let min:string= event[0];
    let max:string =event[1];
    this.products = this.productService.getProducts(this.category, min, max);
  }


  ngOnInit() {
    this.category = this.route.snapshot.queryParams["category"] || "";
   
    this.route
      .queryParams
      .subscribe(params => {
          this.category = params['category'] || "";
          this.products = this.productService.getProducts(this.category, null, null);
      });
  }

  public addProductToCart(product:Product){
    eventbus.publish("addProduct",product);
  }

  public removeProductFromCart(product: Product) {
    eventbus.publish("removeProductFromCart", product);
  }
}
