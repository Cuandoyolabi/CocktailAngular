import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogicService } from '../../../services/logic.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [AsyncPipe],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  cocktails: any[] = [];

  constructor(public logicService: LogicService){}

  ngOnInit(): void {
    this.logicService.cocktails$.subscribe(data => {
      this.cocktails = data || [];
      console.log("Esta es la informacion this.items: ", this.cocktails)
    })
  }


}
