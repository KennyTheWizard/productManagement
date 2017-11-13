import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {

  productList: Product[] = [
    { id:0, title: "Laptop", price: 1299.99, imgUrl: ''}
  ]
  constructor() { }

  getProductList():Product[] {
    return this.productList;
  }
  getProduct(id:string):Product {
    return this.productList[id];
  }

  editProduct(editedProduct:Product):void {
    let index = editedProduct.id;
    this.productList[index] = editedProduct;
  }
  deleteProduct(id:number):void {
    this.productList.splice(id, 1);
  }
  addProduct(newProduct:Product):void {
    newProduct.id = this.productList.length;
    this.productList.push(newProduct);
  }
}
