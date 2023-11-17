import {CommonModule} from '@angular/common';
import {Component, effect, EventEmitter, Output, signal} from '@angular/core';
import {boardTypesMock} from "../../../domain/mocks/board-types.mock";
import {CheckboxComponent} from "../checkbox/checkbox.component";

@Component({
  selector: 'app-board-filter',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() selectedFilterEvent = new EventEmitter()
  boardTypes = signal(boardTypesMock)


  constructor() {
    effect(() => {
      const selected = this.boardTypes().find(type => type.checked)?.id || ''
      this.selectedFilterEvent.emit(selected)
    }, {allowSignalWrites: true})
  }

  checkType = (id: string) => {
    this.boardTypes.update(
      value =>
        value.map(type => ({...type, checked: type.id === id})
        )
    )
  }
}
