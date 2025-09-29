import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class LogicService {

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  private cocktailSource = new BehaviorSubject<Cocktail[] | null>(null);
  cocktails$ = this.cocktailSource.asObservable();
  constructor(private http: HttpClient) {}

  private selectedCocktailSource = new BehaviorSubject<Cocktail | null>(null);
  selectedCocktail$= this.selectedCocktailSource.asObservable();

  selectCocktail(cocktail: Cocktail){
    this.selectedCocktailSource.next(cocktail);
  }

  buscarCocktail(nombre: string): any {

    const url = `${this.baseUrl}${nombre}`;
    console.log("Esta es la URL: ", url);

    this.http.get<{ drinks: any[] }>(url).subscribe({

      next: (data) => {
        const cocktails = (data.drinks || []).map(drink => ({
          id: drink.id,
          nombre: drink.strDrink,
          alcohol: drink.strAlcoholic,
          tipoDeVaso: drink.strGlass,
          instrucciones: drink.strInstructions,
          imagen: drink.strDrinkThumb,
          ingredientes: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
          ].filter(Boolean)
        }));
        this.cocktailSource.next(cocktails)
      },

      error: (error) => {
        console.error('Error fetching cocktails:', error);
        this.cocktailSource.next([]);
      }
    });
  }
}
