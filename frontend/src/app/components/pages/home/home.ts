import { Component } from '@angular/core';
import { Food } from '../../../shared/interfaces/Food';
import { FoodService } from '../../../services/food-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Search } from "../../partials/search/search";
import { Tags } from "../../partials/tags/tags";
@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe, Search, Tags],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
   activatedRoute.params.subscribe((params) => {
    if(params.searchTerm){
      this.foods = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
    }else if (params.tag){
      this.foods = this.foodService.getAllFoodByTagsMethod(params.tag)
    }else{
      this.foods = foodService.getAll();
    }
   })
  }
}
