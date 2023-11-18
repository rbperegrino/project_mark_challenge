import {BoardType} from "../../domain/models/board-type.model";
import {ColumnType} from "../../domain/models/column-type.model";

export interface BoardState {
  boardTypes: BoardType[];
  columns: ColumnType[];
}


export const initialState: BoardState = {
  boardTypes: [],
  columns: []
}
