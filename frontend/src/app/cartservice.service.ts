import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Product from '../../../backend/src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected cartItems = new BehaviorSubject<Product[]>([]);
  private placeholder: Product[] = []; 

  constructor() {
    const ls = this.getCartData();
    if (ls) this.cartItems.next(ls);
  }

  getCartItems(): BehaviorSubject<Product[]> {
    return this.cartItems;
  }

  getCartData(): Product[] {
    const cartDataString = localStorage.getItem('cart') ?? 'null';
    return JSON.parse(cartDataString) || [];
  }

  setCartData(cartData: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  addToCart(product: Product): void {
    const cartData = this.getCartData();
    const existingProduct = cartData.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cartData.push({ ...product, quantity: 1 });
    }

    this.setCartData(cartData);
    this.cartItems.next(cartData);
  }
}