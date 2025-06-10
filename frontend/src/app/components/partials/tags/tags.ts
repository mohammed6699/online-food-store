import { Component } from '@angular/core';
import { TagModelModule } from '../../../shared/models/tag-model/tag-model-module';
import { FoodService } from './../../../services/food-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tags',
  imports: [RouterLink],
  
templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags {
  tags?:TagModelModule[];
  constructor(foodservice:FoodService){
    this.tags = foodservice.getAllTags();
  }
}
