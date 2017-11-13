import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from './../products.service';
import { Product } from './../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  constructor(private _products: ProductsService) { }

  ngOnInit() {
    this.productList = this._products.getProductList();
  }

  deleteProduct(id:number):void {
    this._products.deleteProduct(id);
    this.productList = this._products.getProductList()
  }

}
