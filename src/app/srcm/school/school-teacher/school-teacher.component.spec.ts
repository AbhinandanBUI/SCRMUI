import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTeacherComponent } from './school-teacher.component';

describe('SchoolTeacherComponent', () => {
  let component: SchoolTeacherComponent;
  let fixture: ComponentFixture<SchoolTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
