import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LogonLayoutComponent } from './layouts/logon-layout/logon-layout.component';
import { LogonComponent } from './pages/logon/logon.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'game/:id', component: GameComponent },
    ],
  },
  {
    path: 'logon',
    component: LogonLayoutComponent,
    children: [{ path: '', component: LogonComponent }],
  },
];
