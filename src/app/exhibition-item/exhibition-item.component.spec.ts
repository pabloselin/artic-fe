import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionItemComponent } from './exhibition-item.component';

describe('ExhibitionItemComponent', () => {
  let component: ExhibitionItemComponent;
  let fixture: ComponentFixture<ExhibitionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
