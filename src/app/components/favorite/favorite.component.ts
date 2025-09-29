import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite',
  imports: [RouterModule],
  templateUrl: './favorite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent { }
