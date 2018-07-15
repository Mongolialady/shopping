import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../products/product.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "home";
  public product: ProductComponent;
  
  constructor() { 
  }

  ngOnInit() {
  }

}
