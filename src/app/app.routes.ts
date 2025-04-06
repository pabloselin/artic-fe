import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./exhibitions-list/exhibitions-list.component').then(
        (m) => m.ExhibitionsList,
      ),
  },
  {
    path: 'exhibition',
    loadComponent: () =>
      import('./artwork-item/artwork-item.component').then(
        (m) => m.ArtworkItemComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'exhibition/:exhibitionId',
    loadComponent: () =>
      import('./exhibition-detail/exhibition-detail.component').then(
        (m) => m.ExhibitionDetailComponent,
      ),
  },
];
