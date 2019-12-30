import { Component, OnInit } from '@angular/core';
import { Cart, ShoppingCartRecord, CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    cart: Cart;

    constructor(private _cartService: CartService, private _userService: UserService) { }

    ngOnInit() {

      this._userService.ensureAuthenticated().pipe(switchMap(_ => {
        return this._cartService.getCart();
      })).subscribe(cart => {
        this.cart = cart;
      });
    }

    onCartRecordRemoved(record: ShoppingCartRecord) {
        const index: number = this.cart.CartRecords.indexOf(record, 0);
        if (index > -1) {
            this.cart.CartRecords.splice(index, 1);
        }
    }
}
