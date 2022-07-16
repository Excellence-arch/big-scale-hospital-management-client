import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OnlineUserService } from '../services/online-user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanActivateChild {
  constructor(public onlineUser: OnlineUserService, public router: Router) {}
  private token = localStorage.getItem("token");
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.onlineUser.getDashboard(this.token).subscribe((res: any) => {
        console.log(res);
        if (res.status == false) {
          localStorage.removeItem('token');
          this.router.navigate(['/home']);
          return false;
        } else {
          this.onlineUser.user.next(res.response[0]);
          return true;
        }
      });
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.onlineUser.getDashboard(this.token).subscribe((res:any) => {
        console.log(res);
        if (res.status == false) {
          localStorage.removeItem("token");
          this.router.navigate(['/home']);
          return false;
        } 
        else {
          this.onlineUser.user.next(res.response[0]);
          return true;
        }
      })
      return true;
  }
  
}
