import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  brandNew: boolean = false;
  errors: string;
  isRequesting: boolean = false;
  submitted: boolean = false;
  constructor(private router: Router, private user: UserService) { }

  ngOnInit(): void {
  }

  login(login: NgForm) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (login && login.valid) {
      const user = login.form.value.user;
      const  password = login.form.value.password;
      this.user.login(user, password);
      this.router.navigate(['/collection']);
    } else{
      this.errors = "Oops! Try again!"
    }
  }
}
