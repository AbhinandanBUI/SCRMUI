import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from '../school/school.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { SchoolPendingFeesComponent } from './school-pending-fees/school-pending-fees.component';
import { CommonComponentModule } from '../../common-component/common-component.module';
import { ThemeModule } from '../../@theme/theme.module';
import { SchoolStudentComponent } from './school-student/school-student.component';
import { AddNewStudentComponent } from './school-student/add-new-student/add-new-student.component';
import { StudentDetailsComponent } from './school-student/student-details/student-details.component';
import { SchoolTeacherComponent } from './school-teacher/school-teacher.component';
import { AddNewTeacherComponent } from './school-teacher/add-new-teacher/add-new-teacher.component';
import { TeacherDetailsComponent } from './school-teacher/teacher-details/teacher-details.component';
import { NotActiveComponent } from './not-active/not-active.component';


@NgModule({
  declarations: [
    SchoolComponent,
    SchoolDashboardComponent,


    SchoolPendingFeesComponent,
    SchoolStudentComponent,
    AddNewStudentComponent,
    StudentDetailsComponent,
    SchoolTeacherComponent,
    AddNewTeacherComponent,
    TeacherDetailsComponent,
    NotActiveComponent,

  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    CommonComponentModule,
    ThemeModule
  ]
})
export class SchoolModule { }
