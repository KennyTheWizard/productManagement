import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewProductComponent implements OnInit {

  newProduct:Product = new Product();
  constructor(private _router: Router, private _products:ProductsService) { }
  

  ngOnInit() {
  }
  createProduct(){
    this._products.addProduct(this.newProduct);
    this._router.navigate(['/products']);
  }

}
