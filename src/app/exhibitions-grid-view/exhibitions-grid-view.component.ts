import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Exhibition } from '../../schema/artic';
import { ExhibitionCardItemComponent } from '../exhibition-card-item/exhibition-card-item.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ExhibitionCardSkeletonComponent } from '../exhibition-card-skeleton/exhibition-card-skeleton.component';

@Component({
  selector: 'app-exhibitions-grid-view',
  standalone: true,
  imports: [
    ExhibitionCardItemComponent,
    ExhibitionCardSkeletonComponent,
    ButtonComponent,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './exhibitions-grid-view.component.html',
  styleUrl: './exhibitions-grid-view.component.scss',
})
export class ExhibitionsGridViewComponent {
  @Input() public exhibitions!: Observable<Exhibition[]>;
  @Input() public isLoading!: Observable<boolean>;
  @Input() public sortBy!: SortKeys;
  @Input() public sortDescending!: boolean;

  @Output() public sortExhibitions = new EventEmitter<SortKeys>();
  @Output() public switchOrder = new EventEmitter<void>();
  @Output() public loadMore = new EventEmitter<void>();

  public sortOptions: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'artwork_ids', label: 'Artworks' },
    { key: 'aic_start_at', label: 'Start Date' },
    { key: 'aic_end_at', label: 'End Date' },
    { key: 'status', label: 'Status' },
  ];

  public loadMoreExhibitions() {
    this.loadMore.emit();
  }

  public switchTableOrder() {
    this.switchOrder.emit();
  }

  public updateSort(sortKey: SortKeys) {
    this.sortExhibitions.emit(sortKey);
  }
}
