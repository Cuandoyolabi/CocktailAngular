import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogicService } from '../../../services/logic.service';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  constructor(public logicService: LogicService){}



}
