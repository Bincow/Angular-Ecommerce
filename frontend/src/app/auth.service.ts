// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userType: string = ''; // 'Client' or 'Admin'

  login(username: string, password: string): boolean {
    // Lógica de autenticação simplificada para exemplo
    const storedUser = JSON.parse(userBase.getItem(username));

    if (storedUser && storedUser.password === password) {
      this.isAuthenticated = true;
      this.userType = storedUser.type;
      return true;
    } else {
      this.isAuthenticated = false;
      this.userType = '';
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userType = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserType(): string {
    return this.userType;
  }
}
