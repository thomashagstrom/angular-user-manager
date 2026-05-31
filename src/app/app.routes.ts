import { Routes } from '@angular/router';
import { UsersPage } from '../features/users/pages/users-page';
import { App } from './app';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersPage },
];
