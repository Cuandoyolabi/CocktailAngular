import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-content/main-page/main-page.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RandomDrinkComponent } from './components/random-drink/random-drink.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
        children: [
          { path: '', component: SearchComponent },
          { path: 'random', component: RandomDrinkComponent },
          { path: 'favorite', component: FavoriteComponent },
        ],
      },
    ],
  },
];
