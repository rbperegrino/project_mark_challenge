import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {BoardFacade} from "../../../domain/facade/board.facade";
import {CheckboxComponent} from "../checkbox/checkbox.component";

@Component({
  selector: 'app-board-filter',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  private _boardFacade = inject(BoardFacade)
  boardTypes = toSignal(this._boardFacade.boardTypes$.pipe(takeUntilDestroyed()))


}
