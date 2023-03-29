import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { productResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  products: Product[] = [];
  apiUrl = "https://localhost:44314/api/products/getall";


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
    .get<productResponseModel>(this.apiUrl)
    .subscribe((response) => {
      this.products = response.data
    });
  }
}
