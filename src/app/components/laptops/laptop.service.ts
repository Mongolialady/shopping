import { Http, Response } from '@angular/http';

import { CONFIG } from '../../config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

let laptopsUrl = CONFIG.baseUrls.laptops;

export class Laptop {
    id: number;
    name: string;
    color: string;
}

@Injectable()
export class LaptopService {

    constructor(private http: Http){}

    getLaptop(id: number){
        return this.getLaptops().map(laptops => laptops.find(laptop => laptop.id === id));
    }

    getLaptops(){
        return this.http.get(laptopsUrl).map((response: Response) => <Laptop[]>response.json());
    }
}