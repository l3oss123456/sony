import { Component, DoCheck } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements DoCheck {
  public sumProduct: any;
  public selectedProduct: [{}];
  public isDisplaySelectedProduct: boolean = false;

  constructor(public serviceProduct: ProductsService) {}
  ngDoCheck() {
    this.serviceProduct.getAmountProduct().subscribe((res) => {
      this.sumProduct = res;
    });

    this.serviceProduct.getSelectedProduct().subscribe((res) => {
      this.selectedProduct = [res]
    })
  }

  setDisplaySelectedProduct() {
    this.isDisplaySelectedProduct = !this.isDisplaySelectedProduct
  }
}
