import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseProduct } from '../../../../backend/src/models/purchase-product';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getPurchasesByUserId(purchaseProductParam: any): Observable<PurchaseProduct> {
    return this.http.post<PurchaseProduct>(
      `${this.apiUrl}/api/`,
      purchaseProductParam
    );
  }

  insertPurchase(purchaseProductParam: any): Observable<PurchaseProduct> {
    return this.http.post<PurchaseProduct>(
      `${this.apiUrl}/api/`,
      purchaseProductParam
    );
  }
}
