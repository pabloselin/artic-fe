import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsTableComponent } from './exhibitions-table.component';

describe('ExhibitionsTableComponent', () => {
  let component: ExhibitionsTableComponent;
  let fixture: ComponentFixture<ExhibitionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
