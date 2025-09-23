import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-content/main-page/main-page.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RandomDrinkComponent } from './components/random-drink/random-drink.component';

export const routes: Routes = [

  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'main', component: MainPageComponent},
      { path: 'random', component: RandomDrinkComponent },
      { path: 'favorite', component: FavoriteComponent},
    ]
  }
];
