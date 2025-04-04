import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsGridViewComponent } from './exhibitions-grid-view.component';

describe('ExhibitionsGridViewComponent', () => {
  let component: ExhibitionsGridViewComponent;
  let fixture: ComponentFixture<ExhibitionsGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionsGridViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionsGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
