import {makeEnvironmentProviders} from "@angular/core";
import {BoardStore} from "app/state/board/board.store";
import {BoardClient} from "../../client/board/board.client";
import {BoardClientGateway} from "./board/board.client.gateway";
import {BoardStoreGateway} from "./board/board.store.gateway";

export const provideGateways = () => makeEnvironmentProviders([
  {
    provide: BoardStoreGateway,
    useClass: BoardStore
  },
  {
    provide: BoardClientGateway,
    useClass: BoardClient
  }
])
