import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPendingFeesComponent } from './school-pending-fees.component';

describe('SchoolPendingFeesComponent', () => {
  let component: SchoolPendingFeesComponent;
  let fixture: ComponentFixture<SchoolPendingFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolPendingFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolPendingFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
