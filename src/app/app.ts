import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomePageComponent } from "./components/home-page/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cocktailAngular';
}
