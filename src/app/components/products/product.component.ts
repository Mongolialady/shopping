import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Product, ProductService } from "./product.service"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  private id: any;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {}
  

  ngOnInit() {
    if (!this.product) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id == +id)
        .subscribe(id => this.getProduct());
    }
  }

  private getProduct() {
    this.productService.getProduct(this.id)
      .subscribe(product => this.setEditProduct(product));
  }

  private gotoProducts() {
    let route = ['/products'];
    this.router.navigate(route);
  }

  private setEditProduct(product: Product) {
    if(product) {
      this.product = product;
    } else {
      this.gotoProducts();
    }
  }
}
