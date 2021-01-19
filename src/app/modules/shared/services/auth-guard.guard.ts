import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  route: Router, private userService: UserService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    const currentUser = this.userService.currentUser;
    if (currentUser) {
      return true;
    }
    else if(isNaN(id) || id < 1) {
      alert("invalid Id");
      return false;
    }
    // not logged in so redirect to login page with the return url
    this.route.navigate(['/']);
    return false;
  }

}
