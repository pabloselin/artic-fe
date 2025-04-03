import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsTableSkeletonComponent } from './exhibitions-table-skeleton.component';

describe('ExhibitionsTableSkeletonComponent', () => {
  let component: ExhibitionsTableSkeletonComponent;
  let fixture: ComponentFixture<ExhibitionsTableSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionsTableSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionsTableSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
