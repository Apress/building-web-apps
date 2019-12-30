import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getFeaturedProducts(): Observable<any> {
    return this.http.get(environment.apiEndpoint + "product/featured");
  }
}
