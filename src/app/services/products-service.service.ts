import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  url: string = "http://localhost:3000/products/";

  constructor(private httpServer:HttpClient) { }

  get(){
      return this.httpServer.get(this.url);
  }

  getById(id: number){
    return this.httpServer.get(this.url + id);
  }
    
  post(newProduct:Product){
    return this.httpServer.post(this.url, newProduct);
  }

  put(product:Product){
    return this.httpServer.put(this.url+ product.id, product);

  }
  delete(id:number){
    return this.httpServer.delete(this.url+ id)
  }
}
