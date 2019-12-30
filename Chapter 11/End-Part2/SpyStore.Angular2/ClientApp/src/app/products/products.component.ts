import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[];
  header: string;

  constructor(private _service: ProductService) { }

  ngOnInit() {

    this.header = 'Featured Products';
    this._service.getFeaturedProducts().subscribe(products =>
      this.products = products);

  }
}
