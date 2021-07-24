import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: Product[] = [];

  constructor(private httpService: HttpClient) {}

  addItemToCart(item: Product) {
    this.items.push(item);
  }

  getCartItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpService.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
