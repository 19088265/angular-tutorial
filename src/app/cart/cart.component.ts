import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent{


  //Use method in cart service to obtain items
  items = this.cartService.getItems();

  //Gather user's name and address
  checkoutForm = this.formBuilder.group({
    name: '', address: ''
  });

  //Inject cart service so that cartComp can use it
  constructor(private cartService: CartService, private formBuilder: FormBuilder,) {}

  //Submit method to process the form
  onSubmit():void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  
}
