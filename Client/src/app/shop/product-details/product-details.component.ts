import { ShopService } from './../shop.service';
import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopService: ShopService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let productId = this.activeRoute.snapshot.paramMap.get('id');
    if (productId !== null) {
      this.shopService.getProduct(+productId).subscribe(product => {
        this.product = product;
      }, error => {
        console.log(error);
      });
    }
  }
}
