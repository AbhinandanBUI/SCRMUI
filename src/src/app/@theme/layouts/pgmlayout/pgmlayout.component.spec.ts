import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMLayoutComponent } from './pgmlayout.component';

describe('PGMLayoutComponent', () => {
  let component: PGMLayoutComponent;
  let fixture: ComponentFixture<PGMLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
