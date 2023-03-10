import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard /*implements CanActivate*/ {

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }
  // canActivate(){
  //   if(this.authService.isLoggedIn()){
  //     return true;
  //   }
  //   this.router.navigate(['/board']);
  //   return false;
  // }

}
