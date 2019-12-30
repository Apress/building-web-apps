import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CartService, ShoppingCartRecord} from '../services/cart.service';
import {LoggingService} from '../services/logging.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[cart-record]',
    templateUrl: './cart-record.component.html',
})
export class CartRecordComponent {
    @Input() record: ShoppingCartRecord;
    @Output() recordRemoved = new EventEmitter<ShoppingCartRecord>();

    constructor(private _cartService: CartService, private _loggingService: LoggingService) { }

    updateItem() {
        this.record.LineItemTotal = this.record.Quantity * this.record.CurrentPrice;
        this._cartService.updateCartRecord(this.record).subscribe((response) => {
            if (response.status === 201) {
                this._cartService.getCartRecord(this.record).subscribe(newRecord => {
                    this.record.TimeStamp = newRecord.TimeStamp;
                });
            }
        }, err => this._loggingService.logError('Error Updating Cart Item', err),
        () => console.log('Update Complete'));
    }

    removeItem() {
        this._cartService.removeCartRecord(this.record).subscribe((response) => {
            if (response.status === 204) {
                this.recordRemoved.emit(this.record);
            }
        }, err => this._loggingService.logError('Error Deleting Cart Item', err),
        () => console.log('Delete Complete'));
    }
}
