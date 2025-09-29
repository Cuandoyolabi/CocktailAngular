import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogicService } from '../../services/logic.service';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, RouterModule],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

  constructor(public logicService: LogicService){}

}
