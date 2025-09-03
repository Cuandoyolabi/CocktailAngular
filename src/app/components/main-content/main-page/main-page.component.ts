import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogicService } from '../../../services/logic.service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  items: any[] = [];

  constructor(private logicService: LogicService){}

  ngOnInit(): void {
    this.logicService.cocktails$.subscribe(data => {
      this.items = data || [];
    })

    //console.log("Esta es la informacion this.items: ", this.items)
  }



}
