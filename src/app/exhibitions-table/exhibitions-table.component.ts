import { Component, Input } from '@angular/core';
import { Exhibition } from '../../schema/artic';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { ArtworksService } from '../services/artworks.service';
import { BehaviorSubject, combineLatestWith, map, take, tap } from 'rxjs';
import { ExhibitionsTableSkeletonComponent } from '../exhibitions-table-skeleton/exhibitions-table-skeleton.component';
import { Router, RouterModule } from '@angular/router';

type sortKeys = 'id' | 'title' | 'aic_start_at' | 'aic_end_at' | 'status';

@Component({
  selector: 'app-exhibitions-table',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe,
    NgClass,
    ExhibitionsTableSkeletonComponent,
    RouterModule,
  ],
  templateUrl: './exhibitions-table.component.html',
  styleUrl: './exhibitions-table.component.scss',
})
export class ExhibitionsTableComponent {
  private exhibitionsSubject = new BehaviorSubject<Exhibition[]>([]);
  public exhibitions = this.exhibitionsSubject.asObservable();

  private currentPageSubject = new BehaviorSubject<number>(1);
  public currentPage = this.currentPageSubject.asObservable();

  private sortBySubject = new BehaviorSubject<sortKeys>('aic_start_at');
  public sortBy = this.sortBySubject.asObservable();

  private sortDescendingSubject = new BehaviorSubject<boolean>(false);
  public sortDescending = this.sortDescendingSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading = this.isLoadingSubject.asObservable();

  public pageSize = 10;

  constructor(
    private artworksService: ArtworksService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.addExhibitions(1);
  }

  public updateSort(sortKey: sortKeys) {
    this.exhibitions
      .pipe(
        take(1),
        combineLatestWith(this.sortDescending, this.sortBy),
        take(1),
        map(([exhibitions, descending, sortBy]) => {
          const sortedExhibitions = this.sortExhibitions(
            exhibitions,
            sortKey,
            sortBy === sortKey ? !descending : descending,
          );
          this.exhibitionsSubject.next(sortedExhibitions);
          this.sortBySubject.next(sortKey);
          this.sortDescendingSubject.next(
            sortBy === sortKey ? !descending : descending,
          );
        }),
      )
      .subscribe();
  }

  private addExhibitions(page: number) {
    this.isLoadingSubject.next(true);
    return this.artworksService
      .getExhibitions(page, this.pageSize)
      .pipe(
        combineLatestWith(this.exhibitions, this.sortBy, this.sortDescending),
        take(1),
        map(([exhibitions, prevexhibitions, sortBy, sortDescending]) => {
          const sortedExhibitions = this.sortExhibitions(
            [...prevexhibitions, ...exhibitions],
            sortBy,
            sortDescending,
          );
          this.exhibitionsSubject.next(sortedExhibitions);
        }),
        tap(() => this.isLoadingSubject.next(false)),
      )
      .subscribe();
  }

  private sortExhibitions(
    exhibitions: Exhibition[],
    sortKey: sortKeys,
    descending: boolean,
  ): Exhibition[] {
    console.log(descending);
    return exhibitions.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return descending ? 1 : -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return descending ? -1 : 1;
      }
      return 0;
    });
  }

  public loadMoreExhibitions() {
    console.log('loadmore');
    this.currentPage
      .pipe(
        take(1),
        map((page) => page + 1),
        tap((page) => this.addExhibitions(page)),
        tap((page) => this.currentPageSubject.next(page)),
      )
      .subscribe();
  }

  public onExhibitionClick(id: string) {
    console.log('Exhibition clicked:', id);
    this.router.navigate(['/exhibition', id]);
  }
}
