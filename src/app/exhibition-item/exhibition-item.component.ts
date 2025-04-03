import { Component, Input } from '@angular/core';
import { Exhibition } from '../../schema/artic';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-exhibition-item',
  standalone: true,
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './exhibition-item.component.html',
  styleUrl: './exhibition-item.component.scss',
})
export class ExhibitionItemComponent {
  @Input() public exhibition!: Exhibition;

  constructor() {}

  public processImgixUrl(url: string): string {
    return url.replace('https://artic-web.imgix.net', '');
  }
}
