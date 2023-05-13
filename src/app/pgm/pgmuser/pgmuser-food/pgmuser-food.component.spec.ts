import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMUserFoodComponent } from './pgmuser-food.component';

describe('PGMUserFoodComponent', () => {
  let component: PGMUserFoodComponent;
  let fixture: ComponentFixture<PGMUserFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMUserFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMUserFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
