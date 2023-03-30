import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { productResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService:ProductService) { }
  products: Product[] = [];
  dataLoaded = false;


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
   this.productService.getProducts().subscribe(responce=>{
    this.products = responce.data;
    this.dataLoaded = true;
   });
  }
}
