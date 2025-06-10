import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./components/partials/header/header";
import { Home } from "./components/pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RouterLink, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
