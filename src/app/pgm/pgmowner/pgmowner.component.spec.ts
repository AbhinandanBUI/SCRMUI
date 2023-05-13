import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMOwnerComponent } from './pgmowner.component';

describe('PGMOwnerComponent', () => {
  let component: PGMOwnerComponent;
  let fixture: ComponentFixture<PGMOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
