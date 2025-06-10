import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../interfaces/Food';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartItemModule { 
  quantity:number = 1;
  price:number; 
  constructor(public food:Food){
    this.price = food.price;
   }

}
