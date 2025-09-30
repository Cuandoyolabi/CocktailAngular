import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { LogicService } from '../../../services/logic.service';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-page',
  imports: [AsyncPipe, RouterModule, NgIf],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  cocktails: any[] = [];

  //Cambios de paginas ?
  selectedPage: 'random' | 'favorites' = 'random';

  constructor(public logicService: LogicService){}

  ngOnInit(): void {
    this.logicService.cocktails$.subscribe(data => {
      this.cocktails = data || [];
      console.log("Esta es la informacion this.items: ", this.cocktails)
    })
  }
}
