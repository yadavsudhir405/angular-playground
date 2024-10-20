import { Routes } from '@angular/router';
import {authGuard} from "./features/core/auth.guard";

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children:[
      {
        path: '', pathMatch: 'full', redirectTo: 'home',
      },
      {
        path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'weather', loadComponent: () => import('./features/weather/weather-page/weather-page.component')
          .then(m => m.WeatherPageComponent)
      }
    ]
  },
];
