import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // (app-header) selector to add to the app.html (<app-header></app-header>)
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
