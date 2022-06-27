import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-account',
  templateUrl: './validate-account.component.html',
  styleUrls: ['./validate-account.component.css']
})
export class ValidateAccountComponent implements OnInit {

  public verification_code: any;
  public error: any = false;

  constructor(public requestService: RequestsService, private router: Router) { }

  ngOnInit(): void {
  }

  verify() {
    this.error = false;
    this.requestService.verifyCode(parseInt(this.verification_code)).subscribe((res:any) => {
      if(!res.status) {
        this.error = res.message;
      } else {
        this.router.navigate(["/users/dashboard"]);
      }
    })
  }

}
