import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { CONFIG } from '../../config';
import { Product } from '../products/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public productsInCart: Product[] = [];
  public total: number = 0;

  constructor(private router: Router,@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    console.log("checkout", this.storage);

    this.productsInCart = this.storage.get(CONFIG.CART_KEY) || [];
    console.log(this.productsInCart.length);
  }

  public totalPrice(): number {
      let total=0;
      this.productsInCart.forEach(item => {
         total = total + item.price;
      });
      this.total=total;
      console.log(this.total);
    return this.total;
  }

  public proceed(): void {
    this.storage.set(CONFIG.PAYMENT_KEY, this.total);
  }
}
