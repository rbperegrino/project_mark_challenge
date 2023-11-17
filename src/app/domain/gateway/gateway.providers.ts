import {makeEnvironmentProviders} from "@angular/core";
import {BoardStore} from "app/state/board/board.store";
import {BoardStoreGateway} from "./board/board.store.gateway";

export const provideGateways = () => makeEnvironmentProviders([
  {
    provide: BoardStoreGateway,
    useClass: BoardStore
  }
])
