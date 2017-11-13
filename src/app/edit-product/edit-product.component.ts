import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditProductComponent implements OnInit {
  editProduct:Product;

  constructor(private _router: Router, private _route: ActivatedRoute, private _products:ProductsService) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params) => {
      this.editProduct = this._products.getProduct(params.get('id');

    });
  }

  onEditSubmit(): void {
    this._products.editProduct(this.editProduct);
    this._router.navigate(['/products']);
  }

  deleteProduct(): void {
    this._products.deleteProduct(this.editProduct.id);
    this._router.navigate(['/products']);
  }
}
