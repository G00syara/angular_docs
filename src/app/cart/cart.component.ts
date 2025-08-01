import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
