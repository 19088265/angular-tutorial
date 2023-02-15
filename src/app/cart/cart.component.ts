import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  //Use method in cart service to obtain items
  items = this.cartService.getItems();

  //Inject cart service so that cartComp can use it
  constructor(private cartService: CartService) {}

  removeItem(product: Product){
    this.cartService.removeItem(product);
  }
}
