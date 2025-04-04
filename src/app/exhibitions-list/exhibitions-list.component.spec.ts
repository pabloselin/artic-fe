import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsList } from './exhibitions-list.component';

describe('ExhibitionsTableComponent', () => {
  let component: ExhibitionsList;
  let fixture: ComponentFixture<ExhibitionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionsList],
    }).compileComponents();

    fixture = TestBed.createComponent(ExhibitionsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
