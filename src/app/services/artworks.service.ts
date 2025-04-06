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

export interface SingleArtworkResponse {
  data: Artwork;
}
@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  constructor(private http: HttpClient) {}

  public getExhibitions(page: number, limit: number): Observable<Exhibition[]> {
    const cacheKey = `exhibitions_page_${page}_limit_${limit}`;
    const cachedExhibitions = localStorage.getItem(cacheKey);

    if (cachedExhibitions) {
      // Return cached data as an Observable
      return new Observable((observer) => {
        observer.next(JSON.parse(cachedExhibitions));
        observer.complete();
      });
    }

    // Fetch data from the API if not in cache
    const params = `?page=${page}&limit=${limit}`;
    return this.http.get<ArticResponse>(`exhibitions/${params}`).pipe(
      map((response) => {
        // Cache the data in localStorage
        localStorage.setItem('pagesLoaded', page.toString());
        localStorage.setItem(cacheKey, JSON.stringify(response.data));
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
    return this.http.get<SingleArtworkResponse>(`artworks/${id}`).pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  public generateArtworkImg(identifier: string): string {
    return `${identifier}/full/400,/0/default.jpg`;
  }
}
