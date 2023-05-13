import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCRMComponent } from './scrm.component';

describe('SCRMComponent', () => {
  let component: SCRMComponent;
  let fixture: ComponentFixture<SCRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCRMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
