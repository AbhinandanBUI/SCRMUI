import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteContactusComponent } from './website-contactus.component';

describe('WebsiteContactusComponent', () => {
  let component: WebsiteContactusComponent;
  let fixture: ComponentFixture<WebsiteContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
