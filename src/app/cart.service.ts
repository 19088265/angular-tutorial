import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //items property to store an array of products currently in the cart
  items: Product[] = [];

  //3.1 Inject HttpClient
  constructor(private http: HttpClient) {}

  //Add current product to items array
  addToCart(product: Product) {
    this.items.push(product);
  }

  //Retrieve products from items array
  getItems() {
    return this.items;
  }

  //Clear cart by declaring current array as empty
  clearCart() {
    this.items = [];
    return this.items;
  }
  
  //3.2 Define get shipping prices method
  getShippingPrices() {
    return this.http.get< {type: string, price: number}[]> ('/assets/shipping.json');
  }

  
}
