import { Injectable } from '@angular/core';
import { Cart } from './../shared/models/cart/cart-module';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/interfaces/Food';
import { CartItemModule } from './../shared/models/cart-item/cart-item-module';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLOcalStorage();
  // BehaviorSubject => Observable that holds a current value and emits it to new subscribers immediately upon subscription.
  // mainly used in a shared service to allow communication between unrelated components.
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }
  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      return;
    }else{
      this.cart.items.push(new CartItemModule(food))
    }
    this.setCartToLocalStorage();
  }
  removeFromCart(foodId: string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }
  changeQuantity(foodId:string, quantity: number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem){
      return  
    }
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()
  }
  // get and set cart form and to local storage
  private setCartToLocalStorage():void{
    //set the totalprice and total quantity to local storage
    // reduce will call the function based on number of items stored
    this.cart.totlaPrice = this.cart.items.
    reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.totalCount = this.cart.items.
    reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)
    // convert cart from object to json
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson)
    this.cartSubject.next(this.cart);
  }
  private getCartFromLOcalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson):new Cart();
  }
}
