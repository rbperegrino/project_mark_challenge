import {map, Observable, of} from "rxjs";
import {BoardClientGateway} from "../../domain/gateway/board/board.client.gateway";
import {boardColumnsByTypeMock, boardColumnsMock} from "../../domain/mocks/board-columns.mock";
import {boardTypesMock} from "../../domain/mocks/board-types.mock";
import {BoardType} from "../../domain/models/board-type.model";
import {ColumnType} from "../../domain/models/column-type.model";

export class BoardClient implements BoardClientGateway{

  getTypes(): Observable<BoardType[]> {
    return of(boardTypesMock);
  }

  getColumns(type?: string): Observable<ColumnType[]> {
    return of(boardColumnsMock).pipe(
      map(columns => type ?
          columns.filter(column => boardColumnsByTypeMock.get(type)?.includes(column.id)) :
          columns
      )
    );
  }

}
