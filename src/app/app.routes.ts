import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-content/main-page/main-page.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RandomDrinkComponent } from './components/random-drink/random-drink.component';
import { NavPageComponent } from './components/nav-page/nav-page/nav-page.component';

export const routes: Routes = [

  { path: '', component: NavPageComponent},
  { path: 'random', component: RandomDrinkComponent },
  { path: 'favorite', component: FavoriteComponent}
];
