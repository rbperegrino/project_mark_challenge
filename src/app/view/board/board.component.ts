import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';
import {boardColumnsByTypeMock, boardColumnsMock} from "../../domain/mocks/board-columns.mock";
import {ColumnComponent} from "./column/column.component";
import {FilterComponent} from "./filter/filter.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FilterComponent, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  selectedType = signal('')
  columns = signal( boardColumnsMock)

  selectType(value: string) {
    if(!value) return
    this.columns.set(boardColumnsMock.filter(board => boardColumnsByTypeMock.get(value)?.includes(board.id) ))
  }


}
