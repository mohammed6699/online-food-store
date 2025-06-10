import { Component } from '@angular/core';
import { Food } from '../../shared/interfaces/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../services/food-service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-food-page',
  imports: [CurrencyPipe, RouterLink],
templateUrl: './food-page.html',
  styleUrl: './food-page.css'
})
export class FoodPage {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
    private cartService: CartService, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        this.food = foodService.getFoodById(params.id);
      }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
