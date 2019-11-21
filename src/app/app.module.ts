import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFileUploadModule } from "mat-file-upload"
import { MatInputModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { NgModule } from '@angular/core';
import { StudentRestImplService } from './service/student-rest-impl.service';
import { StudentRoutingModule } from './students/student-routing.module';
import { StudentService } from './service/student-service';
import { StudentTableComponent } from './students/student-table/student-table.component';
import { StudentsAddComponent } from './students/add/students.add.component';
import { StudentsComponent } from './students/list/students.component';
import { StudentsFileImplService } from './service/students-file-impl.service';
import { StudentsViewComponent } from './students/view/students.view.component';
import { LoginComponent } from './login/login.component';
import { JwtIterceptorServiceService } from './helpers/jwt-iterceptor-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent,
    MyNavComponent,
    FileNotFoundComponent,
    StudentTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressBarModule,
    StudentRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFileUploadModule
  ],
  providers: [
    //{ provide: CourseService, useClass: CourseServerService },
    { provide: StudentService, useClass: StudentRestImplService },
    { provide: HTTP_INTERCEPTORS, useClass: JwtIterceptorServiceService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
