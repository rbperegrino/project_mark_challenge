import {Signal} from "@angular/core";
import {BoardType} from "../../models/board-type.model";

export abstract class BoardStoreGateway {
  abstract boardTypes: Signal<BoardType[]>
  abstract selectedBoardType: Signal<string>

  abstract selectBoardType(id: string): void
}
