import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../products/product.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "home";
  items: Array<any> = [];
  private _opened: boolean = true;
  public product: ProductComponent;
  
  constructor() { 
    this.items = [
      {name: "../../../assets/img/shopping1.tif"},
      {name: "../../../assets/img/shopping2.jpg"},
      {name: "../../../assets/img/shopping3.jpg"}
    ]
  }

  ngOnInit() {
  }

}
