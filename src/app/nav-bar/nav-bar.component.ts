import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  loggedInUser!: string;

  constructor(private alertify: AlertifyService) {}

  ngOnInit(): void {}

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token') as string;
    return this.loggedInUser;
  }

  onLogOut() {
    localStorage.removeItem('token');
    this.alertify.warning("You are logged out");
  }
}
