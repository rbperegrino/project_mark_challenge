import {Injectable} from "@angular/core";
import {BoardClientGateway} from "../gateway/board/board.client.gateway";
import {BoardStoreGateway} from "../gateway/board/board.store.gateway";


@Injectable({
  providedIn: 'root'
})
export class BoardFacade {
  readonly boardTypes$ = this.storeGateway.boardTypes$
  readonly columns$ = this.storeGateway.columns$

  constructor(
    private storeGateway: BoardStoreGateway,
    private clientGateway: BoardClientGateway
  ) {
    this.clientGateway.getTypes().subscribe(types => {
      this.storeGateway.updateBoardTypes(types)
    })
    this.clientGateway.getColumns().subscribe(columns => this.storeGateway.updateColumns(columns))
  }

  selectBoardType(type: string) {
    this.storeGateway.selectBoardType(type)
    this.clientGateway.getColumns(type).subscribe(columns => this.storeGateway.updateColumns(columns))
  }

}
