import { Http, Response } from '@angular/http';

import { CONFIG } from '../../config';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let productsUrl = CONFIG.baseUrls.products;

export class Product {
    productId: number;
    productName: string;
	vendorName: string;
	price: number;
	category: string;
	imageUrl: string;
	starRating: number;
}

@Injectable()
export class ProductService {

    constructor(private http: Http){}

    getProduct(id: number){
        return this.getProducts().map(products => products.find(product => product.productId === id));
    }

    getProducts(){
        return this.http
            .get(productsUrl)
            .map((response: Response) => <Product[]>response.json());
    }
}

