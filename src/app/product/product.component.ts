import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements DoCheck {
  public amount: any;
  public products: Array<any>;
  public selectedProduct: Array<any>;
  public displayProduct: Array<any>;

  constructor(public serviceProduct: ProductsService) {
    this.products = [
      {
        id: 0,
        productName: 'Vlog camera ZV-1',
        price: '22990',
        src: '../../assets/p3.jpg',
      },
    ];
    for (var i = 0; i < 8; i++) {
      this.products.push({
        id: i + 10,
        productName: 'Vlog camera ZV-'+(i+2),
        price: '22990',
        src: '../../assets/p3.jpg',
      });
    }
  }

  ngDoCheck() {
    this.serviceProduct.getAmountProduct().subscribe((res) => {
      this.amount = res
    })
    let selectedData;
    this.serviceProduct.getSelectedProduct().subscribe((res) => {
      selectedData = res
    })
    this.selectedProduct = selectedData
  }

  addToCart(index, productId) {
    this.amount++;
    this.serviceProduct.setAmountProduct(this.amount);
    if (this.amount == 1) {
      this.selectedProduct = [{ ...this.products[index], quantity: 1 }];
    } else {
      //check same product
      if (
        this.selectedProduct.find((data) => data.id == productId) == undefined
      ) {
        this.selectedProduct.push(this.products[index]);
      }
      const ind = this.selectedProduct.findIndex(
        (data) => data.id == productId
      );
      //set quantity to object
      if (!this.selectedProduct[ind].hasOwnProperty('quantity')) {
        this.selectedProduct[ind] = { ...this.selectedProduct[ind], quantity: 1 };
      } else {
        this.selectedProduct[ind] = {
          ...this.selectedProduct[ind],
          quantity: this.selectedProduct[ind].quantity + 1,
        };
      }
    }
    this.serviceProduct.setSelectedProduct(this.selectedProduct);
  }
  
}
