import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogicService {

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  private cocktailSource = new BehaviorSubject<any[]>([]);
  cocktails$ = this.cocktailSource.asObservable();
  constructor(private http: HttpClient) {}



  buscarCocktail(nombre: string): any {


    console.log("Esta funcion se esta ejecutando, nombre: ", nombre);
    const url = `${this.baseUrl}${nombre}`;
    console.log("Esta es la URL: ", url);
    this.http.get<any>(url).subscribe({
      next: (data) => this.cocktailSource.next(data.drinks),
      error: (error) => {
        console.error('Error fetching cocktails:', error);
        this.cocktailSource.next([]);
      }
    });
  }
}
