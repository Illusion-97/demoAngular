import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'data-binding',
    loadComponent: () => import('./pages/data-binding/data-binding').then(m => m.DataBinding)
  },
  {
    path: 'directives',
    loadComponent: () => import('./pages/directives/directives').then(m => m.Directives)
  },
  {
    path: "editor",
    loadComponent: () => import('./pages/editor/editor').then(m => m.Editor)
  }
];
