import { Component, Input } from '@angular/core';
import { Exhibition } from '../../schema/artic';
import { AsyncPipe, NgClass } from '@angular/common';
import { ArtworksService } from '../services/artworks.service';
import { BehaviorSubject, combineLatestWith, map, take, tap } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown,
  faTable,
  faGripVertical,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { ExhibitionsTableViewComponent } from '../exhibitions-table-view/exhibitions-table-view.component';
import { ExhibitionsGridViewComponent } from '../exhibitions-grid-view/exhibitions-grid-view.component';
import { ButtonComponent } from '../button/button.component';

type SortKeys = 'id' | 'title' | 'aic_start_at' | 'aic_end_at' | 'status';
type TableColumn = {
  key: SortKeys;
  label: string;
};

@Component({
  selector: 'app-exhibitions-table',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    ExhibitionsTableViewComponent,
    ExhibitionsGridViewComponent,
    ButtonComponent,
    RouterModule,
    FontAwesomeModule,
  ],
  templateUrl: './exhibitions-list.component.html',
  styleUrl: './exhibitions-list.component.scss',
})
export class ExhibitionsList {
  private exhibitionsSubject = new BehaviorSubject<Exhibition[]>([]);
  public exhibitions = this.exhibitionsSubject.asObservable();

  private currentPageSubject = new BehaviorSubject<number>(1);
  public currentPage = this.currentPageSubject.asObservable();

  private sortBySubject = new BehaviorSubject<SortKeys>('aic_start_at');
  public sortBy = this.sortBySubject.asObservable();

  private sortDescendingSubject = new BehaviorSubject<boolean>(false);
  public sortDescending = this.sortDescendingSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading = this.isLoadingSubject.asObservable();

  public pageSize = 10;

  private layoutSubject = new BehaviorSubject<'table' | 'grid'>('table');
  public layout = this.layoutSubject.asObservable();

  public faSortUp = faSortUp;
  public faSortDown = faSortDown;
  public faSort = faSort;
  public faTable = faTable;
  public faGripVertical = faGripVertical;

  public tableColumns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'aic_start_at', label: 'Start Date' },
    { key: 'aic_end_at', label: 'End Date' },
    { key: 'status', label: 'Status' },
  ];

  constructor(
    private artworksService: ArtworksService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.addExhibitions(1);
  }

  public updateSort(sortKey: SortKeys) {
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
    sortKey: SortKeys,
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
    this.router.navigate(['/exhibition', id]);
  }

  public getSortIcon(sortKey: SortKeys, descending: boolean): IconDefinition {
    console.log(this.sortBySubject.value, sortKey);
    if (this.sortBySubject.value === sortKey) {
      return descending ? this.faSortDown : this.faSortUp;
    }
    return this.faSort;
  }

  public updateLayout(layout: 'table' | 'grid') {
    this.layoutSubject.next(layout);
  }
}
