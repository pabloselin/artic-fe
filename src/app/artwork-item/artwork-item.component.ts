import { Component, Input } from '@angular/core';
import { Artwork } from '../../schema/artic';
import { NgOptimizedImage } from '@angular/common';
import { ArtworksService } from '../services/artworks.service';

@Component({
  selector: 'app-artwork-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './artwork-item.component.html',
  styleUrl: './artwork-item.component.scss',
})
export class ArtworkItemComponent {
  @Input()
  public artwork!: Artwork;

  constructor(private artworksService: ArtworksService) {}

  public getArtworkImg(identifier: string): string {
    return this.artworksService.generateArtworkImg(identifier);
  }
}
