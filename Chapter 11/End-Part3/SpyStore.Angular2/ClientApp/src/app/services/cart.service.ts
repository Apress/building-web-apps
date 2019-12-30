import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { UserService } from './user.service';

export class Cart {
  private _cartRecords: any[] = [];

  constructor(cart: any) {
    if (cart) {
      this._cartRecords = cart.CartRecords;
    }
  }

  get CartRecords(): any[] {
    return this._cartRecords;
  }

  get CartTotal(): number {
    let total = 0;
    this._cartRecords.forEach(r => total += r.LineItemTotal);
    return total;
  }

  addToCart(cartRecord: any) {
    this._cartRecords.push(cartRecord);
  }
}

export interface ShoppingCartRecord {
  Id?: number;
  CustomerId?: number;
  ProductId: number;
  Quantity: number;
  TimeStamp?: any;
  CurrentPrice?: number;
  LineItemTotal?: number;
}


@Injectable()
export class CartService {

  constructor(private http: HttpClient, private _userService: UserService) { }

  getCart(): Observable<Cart> {
    return this.http.get(environment.apiEndpoint + 'shoppingcart/' + this._userService.User.Id)
      .pipe(map(response => new Cart(response)));
  }

  addToCart(cartRecord: ShoppingCartRecord): Observable<HttpResponse<Object>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.apiEndpoint + 'shoppingcartrecord/' + this._userService.User.Id,
      JSON.stringify(cartRecord), { headers: headers, observe: 'response' });
  }

  getCartRecord(cardRecord: ShoppingCartRecord): Observable<ShoppingCartRecord> {
    return this.http.get<ShoppingCartRecord>(environment.apiEndpoint + 'shoppingcartrecord/' + cardRecord.Id);
  }

  updateCartRecord(cartRecord: ShoppingCartRecord): Observable<HttpResponse<Object>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(environment.apiEndpoint + 'shoppingcartrecord/' + cartRecord.Id,
      JSON.stringify(cartRecord), { headers: headers, observe: 'response' });
  }

  removeCartRecord(cartRecord: ShoppingCartRecord): Observable<HttpResponse<Object>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(environment.apiEndpoint + 'shoppingcartrecord/' + cartRecord.Id,
      { headers: headers, observe: 'response',/* body: cartRecord*/ });
  }

  buy(): Observable<HttpResponse<Object>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.apiEndpoint + 'shoppingcart/' + this._userService.User.Id + '/buy',
      JSON.stringify(this._userService.User), { headers: headers, observe: 'response' });
  }
}
