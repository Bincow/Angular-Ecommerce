import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private endpoint = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/product`);    
  }

  public postData(data: any): Observable<any> {    
    console.log(data);
    return this.http.post<any>(`${this.endpoint}/product`, data);
  }

  public putData(data: any): Observable<any> {
    console.log(data);
    return this.http.put<any>(`${this.endpoint}/product/${data.id}`, data);
  }
  
  public deleteItem(itemId: number): Observable<any> {   
    console.log(itemId);
    return this.http.delete<any>(`${this.endpoint}/product/${itemId}`);
  }

}