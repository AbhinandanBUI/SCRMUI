import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomsComponent } from './ecoms.component';

describe('EcomsComponent', () => {
  let component: EcomsComponent;
  let fixture: ComponentFixture<EcomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
