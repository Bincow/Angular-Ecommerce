import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../../../../backend/src/models/product"

@Injectable({
    providedIn: 'root',
  })
  export class ProductService {
    private apiUrl = 'http://localhost:8000';
  
    constructor(private http: HttpClient) {}
  
    getProductsById(productParams: any): Observable<Product> {
      return this.http.post<Product>(`${this.apiUrl}/api/product`, productParams);
    }

    insertProduct(productParams: any): Observable<Product> {
        return this.http.post<Product>(`${this.apiUrl}/api/product`, productParams);
      }

      updateProduct(productParams: any): Observable<Product> {
        return this.http.post<Product>(`${this.apiUrl}/api/product`, productParams);
      }

      deleteProduct(productParams: any): Observable<Product> {
        return this.http.post<Product>(`${this.apiUrl}/api/product`, productParams);
      }      
  }