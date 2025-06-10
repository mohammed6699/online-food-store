import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-search',
  imports: [RouterLink, RouterModule],
  
templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  searchTerm = '';
  constructor(ActivatedRoute:ActivatedRoute, private router:Router){
    ActivatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }
  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/search/'+term)
    }
  }
}
