import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../../schema/artic';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ArtworksService } from '../services/artworks.service';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-artwork-item',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './artwork-item.component.html',
  styleUrl: './artwork-item.component.scss',
})
export class ArtworkItemComponent implements OnInit {
  @Input()
  public artworkId!: string;

  private artworkSubject: BehaviorSubject<Artwork> =
    new BehaviorSubject<Artwork>({});
  public artwork: Observable<Artwork> = this.artworkSubject.asObservable();

  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public isLoading: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private artworksService: ArtworksService) {}

  public ngOnInit(): void {
    this.getArtwork()
      .pipe(
        tap(() => this.isLoadingSubject.next(true)),
        map((artwork) => {
          console.log(artwork);
          this.artworkSubject.next(artwork);
        }),
        tap(() => this.isLoadingSubject.next(false)),
      )
      .subscribe();
  }

  public getArtwork(): Observable<Artwork> {
    return this.artworksService.getArtworkDetail(this.artworkId);
  }

  public getArtworkImg(identifier: string): string {
    return this.artworksService.generateArtworkImg(identifier);
  }
}
