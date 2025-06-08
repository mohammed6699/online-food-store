import { Injectable } from '@angular/core';
import { Food } from '../shared/interfaces/Food';
import { sample_food } from './../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // add the methods
  getAll():Food[]{
    return sample_food;
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
