import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb: FormBuilder, public requestService: RequestsService) { }
  public error: any;
  public message: any;
  public userForm = this.fb.group({
    first_name: ["", [Validators.required]],
    last_name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    address: ["", [Validators.required]],
    gender: ["", [Validators.required]],
  })

  ngOnInit(): void {
  }

  register() {
    this.requestService.register(this.userForm.value).subscribe((res:any) => {
      if(res.status == false) {
        this.error = res.message;
      } else {
        this.message = res.message;
      }
    })
    console.log(this.userForm.value);
  }

}
