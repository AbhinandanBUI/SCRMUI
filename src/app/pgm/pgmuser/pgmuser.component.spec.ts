import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMUserComponent } from './pgmuser.component';

describe('PGMUserComponent', () => {
  let component: PGMUserComponent;
  let fixture: ComponentFixture<PGMUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
