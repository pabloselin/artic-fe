import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import { BehaviorSubject, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private aboutContentSubject = new BehaviorSubject<string>('');
  public aboutContent = this.aboutContentSubject.asObservable();
  public marked = marked;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('@internal/about.md', { responseType: 'text' })
      .pipe(
        map((data) => {
          this.aboutContentSubject.next(data);
        }),
      )
      .subscribe();
  }
}
