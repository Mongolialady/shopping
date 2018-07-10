import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../products/product.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

const CART_KEY = 'pure-awesomeness';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private productsInCart: Product[];

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    var key = this.storage.get(CART_KEY);
    if(key != null){
      this.productsInCart = this.storage.get(CART_KEY);
    }
  }

  public addProductToCart(product: Product){
    console.log("addProductToCart...");

    var cartItemInSession = this.storage.get(CART_KEY);
    if(cartItemInSession == null){
      var products = [];
      products.push(product);
      this.storage.set(CART_KEY, products);
    } else {
      var index = cartItemInSession.findIndex(item => item.productId == product.productId);
      if(index == -1){
        cartItemInSession.push(product);
        this.storage.set(CART_KEY, cartItemInSession);
      } 
      this.productsInCart.push(product);
    }
  }
}
