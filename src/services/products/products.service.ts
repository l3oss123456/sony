import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public sumProduct: number = 0;
  public selectedProduct: [{}];

  constructor() {}
  setAmountProduct(amount) {
    this.sumProduct = amount;
  }

  setSelectedProduct(product) {
    this.selectedProduct = product;
  }

  getAmountProduct() {
    return new Observable((observ) => {
      observ.next(this.sumProduct);
    });
  }

  getSelectedProduct() {
    return new Observable((observ) => {
      observ.next(this.selectedProduct);
    });
  }
}
