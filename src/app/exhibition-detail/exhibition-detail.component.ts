import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ArtworksService } from '../services/artworks.service';
import { Exhibition } from '../../schema/artic';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ArtworkItemComponent } from '../artwork-item/artwork-item.component';
import { USE_BASE_URL_INTERCEPTOR } from '../app.config';

@Component({
  selector: 'app-exhibition-detail',
  standalone: true,
  imports: [RouterModule, AsyncPipe, DatePipe, ArtworkItemComponent],
  templateUrl: './exhibition-detail.component.html',
  styleUrl: './exhibition-detail.component.scss',
  providers: [
    {
      provide: USE_BASE_URL_INTERCEPTOR,
      useValue: true,
    },
  ],
})
export class ExhibitionDetailComponent {
  public exhibition: Observable<Exhibition>;

  constructor(
    private route: ActivatedRoute,
    private artworksService: ArtworksService,
  ) {
    this.exhibition = this.route.params.pipe(
      map((params) => {
        console.log(params);
        return params['exhibitionId'];
      }),
      switchMap((exhibitionId) =>
        this.artworksService.getExhibitionById(exhibitionId),
      ),
      map((exhibition) => {
        console.log(exhibition);
        return exhibition;
      }),
    );
  }
}
