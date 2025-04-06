import { TestBed } from '@angular/core/testing';

import { ArtworksService } from './artworks.service';
import { provideHttpClient } from '@angular/common/http';

describe('ArtworksService', () => {
  let service: ArtworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ArtworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
