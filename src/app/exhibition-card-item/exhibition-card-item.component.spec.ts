import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionCardItemComponent } from './exhibition-card-item.component';

describe('ExhibitionCardItemComponent', () => {
  let component: ExhibitionCardItemComponent;
  let fixture: ComponentFixture<ExhibitionCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionCardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
