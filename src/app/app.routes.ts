import {Routes} from '@angular/router';
import {LayoutComponent} from "./view/layout/layout.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'board' },
  {
    path: '',
    component: LayoutComponent,
  }
];
