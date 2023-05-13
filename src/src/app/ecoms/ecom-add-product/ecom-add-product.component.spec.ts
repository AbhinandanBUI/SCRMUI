import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAddProductComponent } from './ecom-add-product.component';

describe('EcomAddProductComponent', () => {
  let component: EcomAddProductComponent;
  let fixture: ComponentFixture<EcomAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
