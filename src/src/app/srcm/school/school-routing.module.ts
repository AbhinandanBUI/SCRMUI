import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { SchoolComponent } from './school.component';
import { SchoolTeacherComponent } from './school-teacher/school-teacher.component';
import { SchoolStudentComponent } from './school-student/school-student.component';
import { AddNewTeacherComponent } from './school-teacher/add-new-teacher/add-new-teacher.component';
import { NotActiveComponent } from './not-active/not-active.component';
 
const routes: Routes = [{
  path: '',
  component: SchoolComponent,
  children: [
    {
      path: 'Dashboard',
      component: SchoolDashboardComponent,
    },
    {
      path: 'NotActive',
      component: NotActiveComponent,
    },
    {
      path: 'teachers',
      component: SchoolTeacherComponent,
    },
    {
      path: 'newteachers',
      component: AddNewTeacherComponent,
    },
    {
      path: 'students',
      component: SchoolStudentComponent,
    },
  
    {
      path: '',
      redirectTo: 'Dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
