import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomImageUploaderComponent } from './ecom-image-uploader.component';

describe('EcomImageUploaderComponent', () => {
  let component: EcomImageUploaderComponent;
  let fixture: ComponentFixture<EcomImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomImageUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
