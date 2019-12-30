import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { LoggingService } from '../services/logging.service';

@Component({
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[];
  header: string;

  constructor(private _service: ProductService, private _loggingService: LoggingService) { }

  ngOnInit() {
    this._service.getFeaturedProducts().subscribe(products => {
      this.header = 'Featured Products';
      this.products = products;
  }, err => this._loggingService.logError('Error Loading Featured Products', err));

  }
}
