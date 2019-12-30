import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
  isExpanded = false;
  searchText: string;

  constructor(private _router: Router) {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  search() {
    const navigationExtras: NavigationExtras = {
        queryParams: { 'searchText': this.searchText }
    };

    this._router.navigate(['/products'], navigationExtras);
  }
}
