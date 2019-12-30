import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LoggingService } from '../services/logging.service';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

    constructor(private _cartService: CartService, private _router: Router, private _loggingService: LoggingService) { }

    checkout() {
        this._cartService.buy().subscribe((response) => {
            if (response.status === 201) {
                this._router.navigate(['/products']);
            } else {
                this._loggingService.log(response.statusText);
            }
        }, err => this._loggingService.logError('Error Checking out', err));
    }
}
