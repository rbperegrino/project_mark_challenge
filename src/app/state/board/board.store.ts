import {signal} from "@angular/core";
import {BoardStoreGateway} from "../../domain/gateway/board/board.store.gateway";
import {boardTypesMock} from "../../domain/mocks/board-types.mock";

export class BoardStore extends BoardStoreGateway{
  boardTypes = signal(boardTypesMock)
  selectedBoardType = signal('')

  selectBoardType = (value: string) => this.selectedBoardType.set(value)


}
