import { Injectable } from '@angular/core';
import { Api, Artwork } from '../../schema/artic';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface ArtworksResponse {
  data: Artwork[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  constructor(private http: HttpClient) {}

  public getArtworks(): Observable<Artwork[]> {
    return this.http.get<ArtworksResponse>('artworks?page=1&limit=10').pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  public getArtworkDetail(id: string): Observable<Artwork> {
    return this.http.get<Artwork>(`artwork/${id}`);
  }

  public generateArtworkImg(identifier: string): string {
    return `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;
  }
}
