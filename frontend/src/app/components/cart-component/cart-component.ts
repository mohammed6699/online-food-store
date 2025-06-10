import { Component } from '@angular/core';
import { Cart } from '../../shared/models/cart/cart-module';
import { CartService } from '../../services/cart-service';
import { CartItemModule } from '../../shared/models/cart-item/cart-item-module';
import { Title } from "../title/title";
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-component',
  imports: [Title, CurrencyPipe, RouterLink],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css'
})
export class CartComponent {
  cart!:Cart;
  constructor(private cartservice: CartService) {
    // use cart =service to get the cart observable and update cart each time we have a new value
    this.cartservice.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }
  removeFromCart(cartItem: CartItemModule){
    this.cartservice.removeFromCart(cartItem.food.id);
  }
  cahngeQuantity(cartItem: CartItemModule, quantityInString: string){
    const quantityInNumber = Number(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantityInNumber)
  }
}
