// auth.service.ts
import { Injectable } from '@angular/core';
import { userBase } from '../../main';
import { HttpClient } from '@angular/common/http';
import { getApiUrl, ProductDTO } from './_config';

const sectionUri = 'product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http:HttpClient) { 

  }
  
  insertProduct(dto:ProductDTO){
    return this.http.post(getApiUrl(sectionUri),{
        method: "InsertProduct",
        name: dto.name,
        price: dto.price,
        quantity: dto.quantity,
        types: dto.types,
        image: dto.image
    });
  }
  updateProduct(dto:ProductDTO){
    return this.http.post(getApiUrl(sectionUri),{
        method: "UpdateProduct",
        id: dto.id,
        name: dto.name,
        price: dto.price,
        quantity: dto.quantity,
        types: dto.types,
        image: dto.image
    });
  }
  deleteProduct(dto:ProductDTO){
    return this.http.post(getApiUrl(sectionUri),{
        method: "DeleteProduct",
        id: dto.id
    });
  }
  getAllProducts(){
    return this.http.post(getApiUrl(sectionUri),{
      method: "GetProducts"
    });
  }
  getProductsById(dto:ProductDTO){
    return this.http.post(getApiUrl(sectionUri),{
        method: "GetProductsById",
        ids: dto.ids
    });
  }

}
