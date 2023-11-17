import {BoardType} from "../../domain/models/board-type.model";

export interface BoardState {
  boardTypes: BoardType[];
  selectedBoard: string;
}
