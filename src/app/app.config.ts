import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideGateways} from "./domain/gateway/gateway.providers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideGateways()
  ]
};
