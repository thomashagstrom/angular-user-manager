import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  {
    path: 'users',
    loadComponent: () => import('../features/users/pages/users-page').then((m) => m.UsersPage),
  },
  {
    path: 'users/:email',
    loadComponent: () => import('../features/users/pages/user-page').then((m) => m.UsersPage),
  },
];
