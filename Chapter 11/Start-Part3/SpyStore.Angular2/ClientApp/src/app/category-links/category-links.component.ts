import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[categoryLinks]',
  templateUrl: './categoryLinks.component.html'
})
export class CategoryLinksComponent implements OnInit {
  categories: any[];

  constructor(private _service: ProductService) { }

  ngOnInit() {
    this._service.getCategories().subscribe(cats =>
      this.categories = cats);
  }
}
