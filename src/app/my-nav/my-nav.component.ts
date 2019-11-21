import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Student from '../entity/student';
import { StudentService } from '../service/student-service';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
defaultImageUrl = 'assets/images/camt.jpg';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  //constructor(private breakpointObserver: BreakpointObserver, private studentService: StudentService) {}
  constructor(private breakpointObserver: BreakpointObserver, private studentService: StudentService, private authService: AuthenticationServiceService ) {}
  
  hasRole(role: string) {
    return this.authService.hasRole(role);
  }
  students$: Observable<Student[]>  = this.studentService.getStudents();

  get user() {
    return this.authService.getCurrentUser();
  }
}
