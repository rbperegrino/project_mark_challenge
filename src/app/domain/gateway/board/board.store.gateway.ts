import {Observable} from "rxjs";
import {BoardType} from "../../models/board-type.model";
import {ColumnType} from "../../models/column-type.model";

export abstract class BoardStoreGateway {
  abstract boardTypes$: Observable<BoardType[]>
  abstract columns$: Observable<ColumnType[]>


  abstract updateBoardTypes(types: BoardType[]): void
  abstract updateColumns(columns: ColumnType[]): void
  abstract selectBoardType(id: string): void

}
