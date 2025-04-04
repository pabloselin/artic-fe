import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsTableViewComponent } from './exhibitions-table-view.component';

describe('ExhibitionsTableViewComponent', () => {
  let component: ExhibitionsTableViewComponent;
  let fixture: ComponentFixture<ExhibitionsTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionsTableViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionsTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
