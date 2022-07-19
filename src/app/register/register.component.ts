import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  public userForm = this.fb.group({
    first_name: ["", [Validators.required]],
    last_name: ["", [Validators.required]],
    gender: ["", [Validators.required]],
  })

  ngOnInit(): void {
  }

}
