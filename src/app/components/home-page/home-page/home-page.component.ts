import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderPageComponent } from "../../header/header-page/header-page.component";
import { MainPageComponent } from "../../main-content/main-page/main-page.component";
import { NavPageComponent } from "../../nav-page/nav-page/nav-page.component";
import { SidebarComponent } from "../../sidebar-cards/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HeaderPageComponent, MainPageComponent, NavPageComponent, SidebarComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
