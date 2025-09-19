import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-random-drink',
  imports: [],
  templateUrl: './random-drink.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomDrinkComponent { }
