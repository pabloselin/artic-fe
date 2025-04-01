import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtworksService } from './services/artworks.service';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Artwork } from '../schema/artic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'actimo-fe';

  public artworks: Observable<Artwork[]>;

  constructor(private artworksService: ArtworksService) {
    this.artworks = this.artworksService.getArtworks().pipe(
      map((response) => {
        console.log('response', response);
        return response;
      }),
    );
  }

  public ngOnInit(): void {}

  public getArtworkImg(identifier: string): string {
    return this.artworksService.generateArtworkImg(identifier);
  }
}
