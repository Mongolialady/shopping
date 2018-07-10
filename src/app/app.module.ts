import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SidebarModule } from 'ng-sidebar';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
//import { ClothingComponent } from './clothing/clothing.component';
import { LaptopService } from './components/laptops/laptop.service';
import { ProductService } from './components/products/product.service';
import { LaptopComponent } from './components/laptops/laptop.component';
import { ProductComponent } from './components/products/product.component';
import { ProductListComponent } from './components/products/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //ClothingComponent
    LaptopComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    Ng2CarouselamosModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [LaptopService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
