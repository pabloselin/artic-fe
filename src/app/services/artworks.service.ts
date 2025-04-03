import { Injectable } from '@angular/core';
import { Api, Artwork, Exhibition } from '../../schema/artic';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface ArticResponse {
  data: Artwork[] | Exhibition[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
  };
}

export interface SingleExhibitionResponse {
  data: Exhibition;
}
@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  constructor(private http: HttpClient) {}

  public getArtworks(): Observable<Artwork[]> {
    return this.http.get<ArticResponse>('artworks/?page=1&limit=10').pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  public getExhibitions(page: number, limit: number): Observable<Exhibition[]> {
    const params = `?page=${page}&limit=${limit}`;

    return this.http.get<ArticResponse>(`exhibitions/${params}`).pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  public getExhibitionById(id: string): Observable<Exhibition> {
    return this.http.get<SingleExhibitionResponse>(`exhibitions/${id}`).pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  public getArtworkDetail(id: string): Observable<Artwork> {
    return this.http.get<Artwork>(`artwork/${id}`);
  }

  public generateArtworkImg(identifier: string): string {
    return `https://www.artic.edu/iiif/2/${identifier}/full/400,/0/default.jpg`;
  }
}
