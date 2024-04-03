import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  newProduct: Product = new Product();

  constructor(private productService: ProductsServiceService, private routerService: Router){

  }

  addHandler(){
    this.productService.post(this.newProduct)
                .subscribe(prod => {
                      this.routerService.navigateByUrl("/");
                })
  }

}
