import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0;
  product: Product = new Product();
  
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsServiceService,private routerService: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      
      this.productService.getById(this.id).subscribe(data => {
        this.product = data as Product;
      })
    })
  }

  deleteHandler(id:number){
    this.productService.delete(id)
                    .subscribe(datd => {
                      this.routerService.navigateByUrl("/");
                    })
  }   

}

