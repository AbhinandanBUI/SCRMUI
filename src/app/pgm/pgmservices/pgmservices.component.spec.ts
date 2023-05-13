import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMServicesComponent } from './pgmservices.component';

describe('PGMServicesComponent', () => {
  let component: PGMServicesComponent;
  let fixture: ComponentFixture<PGMServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
