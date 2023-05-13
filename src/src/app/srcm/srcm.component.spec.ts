import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcmComponent } from './srcm.component';

describe('SrcmComponent', () => {
  let component: SrcmComponent;
  let fixture: ComponentFixture<SrcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
