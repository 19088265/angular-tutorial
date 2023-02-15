import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //items property to store an array of products currently in the cart
  items: Product[] = [];

  //Add current product to items array
  addToCart(product: Product) {
    this.items.push(product);
  }

  removeItem(product: Product) {
    let index = this.items.indexOf(product);
    this.items.splice(index, 0);
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
}
