import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login Successful');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('username or password is invaild');
    }
  }
}
