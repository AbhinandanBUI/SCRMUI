import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMUserDashboardComponent } from './pgmuser-dashboard.component';

describe('PGMUserDashboardComponent', () => {
  let component: PGMUserDashboardComponent;
  let fixture: ComponentFixture<PGMUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
