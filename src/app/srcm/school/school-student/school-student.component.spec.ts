import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudentComponent } from './school-student.component';

describe('SchoolStudentComponent', () => {
  let component: SchoolStudentComponent;
  let fixture: ComponentFixture<SchoolStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
