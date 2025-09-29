import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-nav-page',
  imports: [],
  templateUrl: './nav-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPageComponent {

  constructor(public modalService : ModalService){}

  abrirModal(){
    this.modalService.open();
  }

}
