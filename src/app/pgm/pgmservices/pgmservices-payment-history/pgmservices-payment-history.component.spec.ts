import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMServicesPaymentHistoryComponent } from './pgmservices-payment-history.component';

describe('PGMServicesPaymentHistoryComponent', () => {
  let component: PGMServicesPaymentHistoryComponent;
  let fixture: ComponentFixture<PGMServicesPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMServicesPaymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMServicesPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
