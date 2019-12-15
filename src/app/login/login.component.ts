import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

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
    this.userService.login(data).subscribe(response => {
      if (response && response.token) {
        localStorage.setItem('token', response.token.accessToken);
        let date = new Date();
        let hours = Math.round(response.token.expiresIn / 3600);
        date.setHours(date.getHours() + hours);

        localStorage.setItem('expires', JSON.stringify(date));

        // Redirect the user to /home
        this.router.navigate(['/dashboard'])
      }
    });
  }
}
