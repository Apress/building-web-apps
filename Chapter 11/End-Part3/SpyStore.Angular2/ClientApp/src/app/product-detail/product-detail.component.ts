import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { LoggingService } from '../services/logging.service';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  message: string;
  isAuthenticated: boolean;
  product: any;
  quantity: any = 1;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _cartService: CartService,
    private _userService: UserService,
    private _loggingService: LoggingService) {
    this.product = {};
    this.isAuthenticated = this._userService.IsAuthenticated;
  }

  ngOnInit() {
    this.isAuthenticated = this._userService.IsAuthenticated;
    this._userService.ensureAuthenticated().subscribe(_ =>
      this.isAuthenticated = true);

    this._route.params.subscribe((params: Params) => {
      const id: number = +params.id;

      this._productService.getProduct(id).subscribe(product =>
        this.product = product, err => this._loggingService.logError('Error Loading Product', err));
    });
  }
  
  addToCart() {
    this._cartService.addToCart({
      CustomerId: this._userService.User.Id,
      ProductId: this.product.Id,
      Quantity: this.quantity,
      LineItemTotal: this.product.CurrentPrice * this.quantity
    }).subscribe((response) => {
      if (response.status === 201) {
        this._router.navigate(['/cart']);
      } else {
        this._loggingService.log(response.statusText);
      }
    }, err => this._loggingService.logError('Error Adding Cart Item', err));
  }
}
