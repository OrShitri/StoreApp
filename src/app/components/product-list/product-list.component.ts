import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  products: Product[] = [];

  constructor(private productService:ProductsServiceService){
    this.productService.get()
                    .subscribe(data => {
                      this.products = data as Product[];
                    })
  } 

  deleteHandler(id:number){
    this.productService.delete(id)
                    .subscribe(datd => {
                      this.products = this.products.filter(prod => prod.id != id);
                    })
  }  

  sortByPriceUp() {
    this.products.sort((a,b) => a.price - b.price);
  }

  sortByPriceDown() {
    this.products.sort((a,b) => b.price - a.price);
  }  

  sortByDateUp() {
    this.products.sort((a,b) =>  new Date(a.datePublished).getTime() - new Date(b.datePublished).getTime());
  }

  sortByDateDown() {
    this.products.sort((a,b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
  } 
     
}
