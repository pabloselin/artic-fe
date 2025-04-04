import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionCardSkeletonComponent } from './exhibition-card-skeleton.component';

describe('ExhibitionCardSkeletonComponent', () => {
  let component: ExhibitionCardSkeletonComponent;
  let fixture: ComponentFixture<ExhibitionCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionCardSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
