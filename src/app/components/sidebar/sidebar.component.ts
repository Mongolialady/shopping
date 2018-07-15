import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private _opened: boolean = true;
  private min: any;
  private max: any;

  constructor() { }

  ngOnInit() {
  }

  getByPrice(){
    
  }
}
