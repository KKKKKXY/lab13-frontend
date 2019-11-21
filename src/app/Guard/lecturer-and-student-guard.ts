import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class StudentAndLecturerGuard {
  constructor(private router:Router,private authService:AuthenticationServiceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      if (this.authService.hasRole('STUDENT') ||
        this.authService.hasRole('LECTURER')){
          return true;
        }
        this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}
    });
    return false;
  }
}
