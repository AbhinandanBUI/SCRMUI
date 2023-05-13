import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTenantComponent } from './add-new-tenant.component';

describe('AddNewTenantComponent', () => {
  let component: AddNewTenantComponent;
  let fixture: ComponentFixture<AddNewTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
