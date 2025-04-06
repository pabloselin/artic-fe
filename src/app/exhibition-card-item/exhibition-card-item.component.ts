import { Component, Input, OnInit } from '@angular/core';
import { Exhibition } from '../../schema/artic';
import { DatePipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exhibition-card-item',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule, NgClass],
  templateUrl: './exhibition-card-item.component.html',
  styleUrl: './exhibition-card-item.component.scss',
})
export class ExhibitionCardItemComponent implements OnInit {
  @Input() public exhibition!: Exhibition;

  constructor(private router: Router) {}

  public faImages = faImages;

  public ngOnInit(): void {
    console.log(this.exhibition);
  }

  public processImgixUrl(url: string): string {
    return url.replace('https://artic-web.imgix.net', '');
  }

  public navigateToExhibitionDetail(): void {
    if (!this.exhibition?.image_url) return;

    this.router.navigate(['/exhibition', this.exhibition.id]);
  }
}
