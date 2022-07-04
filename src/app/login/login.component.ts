import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public requestService: RequestsService, public router: Router) { }

  public id:any = "";
  public error: any = false;
  ngOnInit(): void {
  }

  login() {
    this.error = false;
    this.requestService.login(parseInt(this.id)).subscribe((res:any) => {
      if(!res.status) {
        this.error = res.message;
      } else {
        if(res.status && !res.verified) {
          this.router.navigate(["/verify"]);
        } else {
          localStorage.setItem("token", res.token);
          this.router.navigate(["/dashboard"]);
        }
      }
    })
  }

}
