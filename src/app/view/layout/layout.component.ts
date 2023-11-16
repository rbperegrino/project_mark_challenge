import {CommonModule} from '@angular/common';
import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {BoardComponent} from "../board/board.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BoardComponent, HeaderComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
