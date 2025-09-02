import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogicService } from '../../../services/logic.service';

@Component({
  selector: 'app-header-page',
  imports: [],
  templateUrl: './header-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {

  cocktails: any[] = [];
  searchTerm: string = '';

  constructor(private cocktailService: LogicService ){}

    buscar(): void {if(!this.searchTerm) return;

    this.cocktailService.buscarCocktel(this.searchTerm).subscribe({
      next: (data) => this.cocktails = data.drinks || [],
      error: (error) => console.error('Error fetching cocktails:', error)
    })
  }
}
