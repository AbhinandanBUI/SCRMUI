import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomDashboardComponent } from './ecom-dashboard.component';

describe('EcomDashboardComponent', () => {
  let component: EcomDashboardComponent;
  let fixture: ComponentFixture<EcomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
