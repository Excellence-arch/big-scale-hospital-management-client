import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OnlineUserService } from '../services/online-user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanActivateChild {
  constructor(private onlineUser: OnlineUserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.onlineUser.getDashboard().subscribe((res:any) => {
        if (!res.status) {
          localStorage.removeItem("token");
          this.router.navigate(['/home']);
        } 
        else {
          this.onlineUser.user.next(res.response[0]);
        }
      })
      return true;
  }
  
}
