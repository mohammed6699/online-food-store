import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemModule } from '../cart-item/cart-item-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Cart { 
  items:CartItemModule[] = [];
  totlaPrice: number = 0;
  totalCount: number = 0;
}
