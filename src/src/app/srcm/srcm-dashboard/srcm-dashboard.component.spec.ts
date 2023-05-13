import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcmDashboardComponent } from './srcm-dashboard.component';

describe('SrcmDashboardComponent', () => {
  let component: SrcmDashboardComponent;
  let fixture: ComponentFixture<SrcmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcmDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
