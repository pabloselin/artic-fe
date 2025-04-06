import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import { BehaviorSubject, map } from 'rxjs';
import { USE_BASE_URL_INTERCEPTOR } from '../app.config';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [
    {
      provide: USE_BASE_URL_INTERCEPTOR,
      useValue: false,
    },
  ],
})
export class AboutComponent implements OnInit {
  private aboutContentSubject = new BehaviorSubject<string>('');
  public aboutContent = this.aboutContentSubject.asObservable();
  public marked = marked;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the README.md file
    this.http
      .get('about.md', { responseType: 'text' })
      .pipe(
        map((data) => {
          this.aboutContentSubject.next(data);
        }),
      )
      .subscribe();
  }
}
