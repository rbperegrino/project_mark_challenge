import {Observable} from "rxjs";
import {BoardType} from "../../models/board-type.model";
import {ColumnType} from "../../models/column-type.model";

export abstract class BoardClientGateway {
  abstract getTypes(): Observable<BoardType[]>
  abstract getColumns(id?: string): Observable<ColumnType[]>
}
