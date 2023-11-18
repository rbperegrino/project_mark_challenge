import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {BoardFacade} from "../../domain/facade/board.facade";
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


  private _boardFacade = inject(BoardFacade)
  columns = toSignal(this._boardFacade.columns$.pipe(takeUntilDestroyed()))

  //
  // selectType(value: string) {
  //   if(!value) return
  //   this._boardFacade.selectBoardType(value)
  // }


}
