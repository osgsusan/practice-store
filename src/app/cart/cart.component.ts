import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = this.cartService.getCartItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit() {
    // process form
    window.alert("Your order has been processed.");
    console.log("Order submitted", this.checkoutForm.value);
    this.products = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
