import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FilterComponent} from "./filter/filter.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  selectedType = signal('')

  selectType(value: string) {
    this.selectedType.set(value)
  }

}
