import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Laptop, LaptopService } from "./laptop.service";

@Component({
  selector: 'story-laptops',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Observable<Laptop[]>;
  
  constructor(private laptopService: LaptopService) { 
  }

  ngOnInit() {
    this.laptops = this.laptopService.getLaptops();
  }

}
