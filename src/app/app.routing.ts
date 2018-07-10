import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ProductListComponent } from "./components/products/product-list.component";
import { ProductComponent } from "./components/products/product.component";
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            //{ path: '', pathMatch: 'full', redirectTo: 'products' },
            //{ component: HomeComponent, path: '' },
            { component: ProductListComponent, path: 'products' },
            { component: ProductComponent, path: 'products/:id' },
            //{ component: PageNotFoundComponent, path: '**', pathMatch: 'full'}
        ])
    ]
})

export class AppRoutingModule{
    ProductListComponent;
    ProductComponent
}

export const routableComponents = [
    ProductListComponent,
    ProductComponent
];