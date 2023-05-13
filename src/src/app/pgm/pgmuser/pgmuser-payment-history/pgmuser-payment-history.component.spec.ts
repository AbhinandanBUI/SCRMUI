import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGMUserPaymentHistoryComponent } from './pgmuser-payment-history.component';

describe('PGMUserPaymentHistoryComponent', () => {
  let component: PGMUserPaymentHistoryComponent;
  let fixture: ComponentFixture<PGMUserPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGMUserPaymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGMUserPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
