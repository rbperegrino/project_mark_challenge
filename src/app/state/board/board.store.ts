import {BoardStoreGateway} from "../../domain/gateway/board/board.store.gateway";
import {BoardType} from "../../domain/models/board-type.model";
import {ColumnType} from "../../domain/models/column-type.model";
import {Store} from "../store";
import {BoardState, initialState} from "./board.state";

export class BoardStore extends BoardStoreGateway{

    private store = new Store<BoardState>(initialState)

    boardTypes$ = this.store.select((state) => state.boardTypes)
    columns$ = this.store.select((state) => state.columns)

    updateBoardTypes(boardTypes: BoardType[]) {
        this.store.update(state => ({...state, boardTypes}))
    }

    updateColumns(columns: ColumnType[]) {
        this.store.update(state => ({...state, columns}))
    }

    selectBoardType(id: string) {
        this.store.update(state => {
          const boardTypes = state.boardTypes.map(type => ({...type, checked: type.id === id}))
          return {...state, boardTypes}
        })
    }

}
