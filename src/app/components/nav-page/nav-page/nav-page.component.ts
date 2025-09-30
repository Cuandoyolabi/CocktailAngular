import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-page',
  imports: [],
  templateUrl: './nav-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPageComponent {

  @Output() cambioDeContenido = new EventEmitter<'random' | 'favorites'>();

  cambiarContenido(tab: 'random' | 'favorites'){
    this.cambioDeContenido.emit(tab);
  }



}
