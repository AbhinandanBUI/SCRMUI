import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMComponent } from './pgm.component';

describe('PGMComponent', () => {
  let component: PGMComponent;
  let fixture: ComponentFixture<PGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
