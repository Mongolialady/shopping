import { Http, Headers } from '@angular/http';

import { CONFIG } from '../../config';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { eventbus } from "../event/eventbus";
import { Router } from '@angular/router';

let productsUrl = CONFIG.baseUrls.products;

export class EmailAccount {
    userName: string;
}

@Injectable()
export class EmailService {
    message: String = null;

    constructor(private http: Http, private router: Router) { }

    sendEmail(emailAccount: EmailAccount) {
        var headers = new Headers();
        var info = 'userName=' + emailAccount.userName;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http.post('http://localhost:3000/sendmail', info, { headers: headers }).subscribe((data) => {
            if (data.json().success) {
                console.log('Sent successfully');
                eventbus.publish("checkoutSucess");
                this.message = "Thanks for purchase";
            }
        });
    }

    backToHome(){
        this.router.navigate(['/products']);
    }
}
