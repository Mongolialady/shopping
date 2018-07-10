import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Array<any> = [];
  private _opened: boolean = true;

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
