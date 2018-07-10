import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import { Laptop, LaptopService } from "./laptop.service"

@Component({
  selector: 'story-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  @Input() laptop: Laptop;

  private id: any;
  
  constructor(
    private laptopService: LaptopService,
    private route: ActivatedRoute,
    private router: Router) {}
  

  ngOnInit() {
    if (!this.laptop) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getLaptop());
    }
  }

  private getLaptop() {
    this.laptopService.getLaptop(this.id)
      .subscribe(laptop => this.setEditLaptop(laptop));
  }

  private gotoLaptops() {
    let route = ['/laptops'];
    this.router.navigate(route);
  }

  private setEditLaptop(laptop: Laptop) {
    if(laptop) {
      this.laptop = laptop;
    } else {
      this.gotoLaptops();
    }
  }
}
