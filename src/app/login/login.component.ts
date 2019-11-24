import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit() {
    let data = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };
    console.log('submit is called');
    console.log(data);
    this.userService.login(data).subscribe(response => {
      console.log('here is the response');
      console.log(response);
    });
  }
}
