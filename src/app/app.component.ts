import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'actimo-fe';

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
