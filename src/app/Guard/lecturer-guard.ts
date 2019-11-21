import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class LecturerGuard  {
  
  constructor(private router: Router,private authService:AuthenticationServiceService){}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.hasRole('LECTURER')){
          return true;
        }
        //not logged in so redirect to login page with return url
      this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}
    });
    return false;
    }
}