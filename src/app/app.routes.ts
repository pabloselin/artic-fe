import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./exhibitions-table/exhibitions-table.component').then(
        (m) => m.ExhibitionsTableComponent,
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
    path: 'exhibition/:exhibitionId',
    loadComponent: () =>
      import('./exhibition-detail/exhibition-detail.component').then(
        (m) => m.ExhibitionDetailComponent,
      ),
  },
];
