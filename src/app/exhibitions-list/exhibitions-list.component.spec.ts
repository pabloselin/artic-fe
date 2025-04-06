import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsList } from './exhibitions-list.component';
import { provideHttpClient } from '@angular/common/http';

describe('ExhibitionsTableComponent', () => {
  let component: ExhibitionsList;
  let fixture: ComponentFixture<ExhibitionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionsList],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExhibitionsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
