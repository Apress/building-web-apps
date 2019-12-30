import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'product');
  }

  getFeaturedProducts(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'product/featured');
  }

  getSearchProducts(searchText: string): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'search/' + encodeURIComponent(searchText));
  }

  getProduct(id: number | string): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'product/' + id);
  }

  getProductsForACategory(id: number | string): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'category/' + id + '/products');
  }

  getCategories(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'category');
  }

  getCategory(id: number | string): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'category/' + id);
  }

  searchProducts(searchText: string): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'search/' + searchText);
  }
}
