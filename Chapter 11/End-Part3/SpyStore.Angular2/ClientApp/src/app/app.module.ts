import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppErrorHandler } from './app.errorhandler';
import { AppRoutingModule, routedComponents } from './app.routing';

import { CartService } from './services/cart.service';
import { LoggingService } from './services/logging.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { CategoryLinksComponent } from './category-links/category-links.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CartRecordComponent } from './cart-record/cart-record.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    CategoryLinksComponent,
    CartRecordComponent,
    routedComponents
  ],
  providers: [
    CartService,
    LoggingService,
    ProductService,
    UserService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
