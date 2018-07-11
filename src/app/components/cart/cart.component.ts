import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../products/product.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { CONFIG } from '../../config'
import { eventbus } from "../event/eventbus";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private productsInCart: Product[];

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService ) { }

  ngOnInit() {
      this.storage.set(CONFIG.CART_KEY, []);
      this.productsInCart =  [];
      
      eventbus("addProduct").subscribe((o)=> { 
       this.addProductToCart(o);
      });
      eventbus("removeProductFromCart").subscribe((o) => {
        this.removeProductFromCart(o);
      });
   }

  public addProductToCart(product: Product){
    console.log("addProductToCart...");

    var cartItemInSession = this.storage.get(CONFIG.CART_KEY) || [];
    var index = cartItemInSession.findIndex(item => item.productId == product.productId);
    if (index == -1) {
      cartItemInSession.push(product);
      this.storage.set(CONFIG.CART_KEY, cartItemInSession);
    }
    this.productsInCart = cartItemInSession;
  }

  public removeProductFromCart(product: Product) {
    console.log("remove product from cart ....");
    this.productsInCart = this.productsInCart.filter(item => item.productId != product.productId);
  }
}
