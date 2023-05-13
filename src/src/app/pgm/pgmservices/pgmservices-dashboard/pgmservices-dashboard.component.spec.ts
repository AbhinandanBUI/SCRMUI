import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMServicesDashboardComponent } from './pgmservices-dashboard.component';

describe('PGMServicesDashboardComponent', () => {
  let component: PGMServicesDashboardComponent;
  let fixture: ComponentFixture<PGMServicesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMServicesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMServicesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
