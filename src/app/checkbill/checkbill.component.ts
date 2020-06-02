import { Component, DoCheck } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkbill',
  templateUrl: './checkbill.component.html',
  styleUrls: ['./checkbill.component.scss'],
})
export class CheckbillComponent implements DoCheck {
  public selectedProducts: any;
  public amount: any;

  constructor(public serviceProduct: ProductsService) {}

  ngDoCheck() {
    this.serviceProduct.getSelectedProduct().subscribe((res) => {
      this.selectedProducts = res;
    });
    this.serviceProduct.getAmountProduct().subscribe((res) => {
      this.amount = res
    })
  }

  cancelProduct(index) {
    const newAmount = this.amount - this.selectedProducts[index].quantity
    this.selectedProducts.splice(index, 1);
    this.serviceProduct.setAmountProduct(newAmount)
  }

  calSubTotal() {
    let subTotal = 0;
    this.selectedProducts.map((data) => {
      subTotal = subTotal + data.price * data.quantity;
    });
    return subTotal;
  }

  calTotal() {
    let total = 0;
    this.selectedProducts.map((data) => {
      total = total + data.price * data.quantity;
    });
    return total;
  }
}
