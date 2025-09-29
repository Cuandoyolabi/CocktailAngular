import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-random-drink',
  imports: [RouterModule],
  templateUrl: './random-drink.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomDrinkComponent { }
