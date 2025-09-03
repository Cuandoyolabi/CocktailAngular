import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogicService } from '../../../services/logic.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-page',
  imports: [FormsModule],
  templateUrl: './header-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {

  cocktails: any[] = [];
  searchTerm: string = '';

  constructor(private cocktailService: LogicService ){}

    buscar(): void {
      if(!this.searchTerm) return;
      this.cocktailService.buscarCocktail(this.searchTerm);

      console.log("Esta es la informacion de los cocteles: ", this.cocktails)
      console.log("Esta es la informacion de la busqueda: ", this.searchTerm)
    }
}

