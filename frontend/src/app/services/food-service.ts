import { Injectable } from '@angular/core';
import { Food } from '../shared/interfaces/Food';
import { sample_food, sample_tags } from './../../data';
import { TagModelModule } from '../shared/models/tag-model/tag-model-module';

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
  getFoodById(foodId:string): Food{
    // to overcome if the value of getAll.find()is undefined it will return a new Food()
    return this.getAll().find(food => food.id == foodId) ?? new Food()
  }
  getAllTags():TagModelModule[]{
    return sample_tags
  }
  getAllFoodByTagsMethod(tag:string):Food[]{
    return tag === 'getAll'?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
    
  }
}
