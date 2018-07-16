import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onPriceSearch: EventEmitter<any> = new EventEmitter();


  private _opened: boolean = true;
  private min: any;
  private max: any;

  constructor() { }

  ngOnInit() {
  }

  getByPrice(){
    this.onPriceSearch.emit([this.min, this.max])
  }
}
