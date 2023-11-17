import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {BoardType} from "../../../domain/models/board-type.model";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  @Input({required: true}) props!: BoardType;

  @Output() checkedItemEvent = new EventEmitter<string>()

  check = () => this.checkedItemEvent.emit(this.props.id)
}
