import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogicService {

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) {}

  buscarCocktel(nombre: string): Observable<any> {

    const url = `${this.baseUrl}${nombre}`;
    return this.http.get<any>(url);

  }
}
