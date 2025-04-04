import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exhibition } from '../../schema/artic';
import { ExhibitionsTableSkeletonComponent } from '../exhibitions-table-skeleton/exhibitions-table-skeleton.component';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Observable } from 'rxjs';
import {
  faSort,
  faSortUp,
  faSortDown,
  faTable,
  faPalette,
  faGripVertical,
  faImages,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-exhibitions-table-view',
  standalone: true,
  imports: [
    ExhibitionsTableSkeletonComponent,
    ButtonComponent,
    AsyncPipe,
    DatePipe,
    FontAwesomeModule,
    NgClass,
  ],
  templateUrl: './exhibitions-table-view.component.html',
  styleUrl: './exhibitions-table-view.component.scss',
})
export class ExhibitionsTableViewComponent {
  @Input() public exhibitions!: Observable<Exhibition[]>;
  @Input() public isLoading!: Observable<boolean>;
  @Input() public sortBy!: SortKeys;
  @Input() public sortDescending!: boolean;

  @Output() public sortExhibitions = new EventEmitter<SortKeys>();
  @Output() public switchOrder = new EventEmitter<void>();
  @Output() public loadMore = new EventEmitter<void>();

  public tableColumns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'artwork_ids', label: 'Artworks' },
    { key: 'aic_start_at', label: 'Start Date' },
    { key: 'aic_end_at', label: 'End Date' },
    { key: 'status', label: 'Status' },
  ];

  public faSortUp = faSortUp;
  public faSortDown = faSortDown;
  public faSort = faSort;
  public faTable = faTable;
  public faGripVertical = faGripVertical;
  public faPalette = faPalette;
  public faImages = faImages;

  constructor(private router: Router) {}

  public onExhibitionClick(id: string, disabled: boolean): void {
    if (disabled) return;
    this.router.navigate(['/exhibition', id]);
  }

  public loadMoreExhibitions() {
    this.loadMore.emit();
  }

  public switchTableOrder() {
    this.switchOrder.emit();
  }

  public getSortIcon(sortKey: SortKeys, descending: boolean): IconDefinition {
    console.log(this.sortBy, sortKey);
    if (this.sortBy === sortKey) {
      return descending ? this.faSortDown : this.faSortUp;
    }
    return this.faSort;
  }

  public updateSort(sortKey: SortKeys) {
    this.sortExhibitions.emit(sortKey);
  }
}
