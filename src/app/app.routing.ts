import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ProductListComponent } from "./components/products/product-list.component";
import { ProductComponent } from "./components/products/product.component";
import { PageNotFoundComponent } from './page-not-found.component';
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { EmailComponent } from "./components/email/email.component";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            //{ path: '', pathMatch: 'full', redirectTo: 'products' },
            { component: HomeComponent, path: '' },
            { component: ProductListComponent, path: 'products' },
            { component: ProductComponent, path: 'products/:id' },
            { component: CheckoutComponent, path: 'checkout' },
            { component: EmailComponent, path: 'email' },
            { component: PageNotFoundComponent, path: '**', pathMatch: 'full'}
        ])
    ]
})

export class AppRoutingModule{
    ProductListComponent;
    ProductComponent;
    CheckoutComponent
}

export const routableComponents = [
    ProductListComponent,
    ProductComponent
];