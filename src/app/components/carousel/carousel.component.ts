import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: Array<any> = [];
  
  constructor() { 
    this.items = [
      {name: "../../assets/img/shopping1.tif"},
      {name: "../../assets/img/shopping2.jpg"},
      {name: "../../assets/img/shopping3.jpg"}
    ]
  }

  ngOnInit() {
  }

}
