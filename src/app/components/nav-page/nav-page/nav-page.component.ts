import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPageComponent { }
