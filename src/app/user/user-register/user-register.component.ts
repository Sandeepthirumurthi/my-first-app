import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;

  user: any = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertyfy: AlertifyService
  ) {}

  ngOnInit(): void {
    this.createReisterationForm();
  }

  createReisterationForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    });
  }

  passwordMatchingValidator(fg: AbstractControl): Validators | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value
      ? null
      : { notMatched: true };
  }

  onSubmit() {
    if (this.registerationForm.valid) {
      this.userService.addUser(this.registerationForm.value);
      this.alertyfy.success('Congrats, you are successfully registered');
    } else {
      this.alertyfy.error('Kindly provide the required fields');
    }
  }
}
