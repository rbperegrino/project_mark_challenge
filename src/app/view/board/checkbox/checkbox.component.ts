import {CommonModule} from '@angular/common';
import {Component, inject, Input, ViewEncapsulation} from '@angular/core';
import {BoardFacade} from "../../../domain/facade/board.facade";
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

  private _boardFacade = inject(BoardFacade)
  check = () => this._boardFacade.selectBoardType(this.props.id)
}
