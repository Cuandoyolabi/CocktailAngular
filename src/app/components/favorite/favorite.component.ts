import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  imports: [],
  templateUrl: './favorite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent { }
