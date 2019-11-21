import { Routes, RouterModule } from '@angular/router';
import { StudentsViewComponent } from './view/students.view.component';
import { StudentsAddComponent } from './add/students.add.component';
import { StudentsComponent } from './list/students.component';
import { NgModule } from '@angular/core';
import { StudentTableComponent } from './student-table/student-table.component';
import { LecturerGuard } from '../Guard/lecturer-guard';
import { StudentAndLecturerGuard } from '../Guard/lecturer-and-student-guard';



const StudentRoutes: Routes = [
    { path: 'add', component: StudentsAddComponent ,canActivate:[LecturerGuard]},
    { path: 'list', component: StudentTableComponent ,canActivate:[StudentAndLecturerGuard]},
    { path: 'detail/:id', component: StudentsViewComponent ,canActivate:[StudentAndLecturerGuard]},
    { path: 'table', component: StudentTableComponent ,canActivate:[StudentAndLecturerGuard]}
];
@NgModule({
    imports: [
        RouterModule.forRoot(StudentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentRoutingModule {

}
