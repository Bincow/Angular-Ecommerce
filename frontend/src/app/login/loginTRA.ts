import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../../../../backend/src/models/user"

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getUserByLogin(loginParams: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/api/user`, loginParams);
  }
}