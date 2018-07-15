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
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EmailComponent } from './components/email/email.component';
import { EmailService } from './components/email/email.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';


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
    CheckoutComponent,
    EmailComponent,
    CarouselComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    Ng2CarouselamosModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StorageServiceModule,
  ],
  providers: [LaptopService, ProductService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
