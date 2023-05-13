import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMServicesTodayFoodMakingComponent } from './pgmservices-today-food-making.component';

describe('PGMServicesTodayFoodMakingComponent', () => {
  let component: PGMServicesTodayFoodMakingComponent;
  let fixture: ComponentFixture<PGMServicesTodayFoodMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMServicesTodayFoodMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMServicesTodayFoodMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
