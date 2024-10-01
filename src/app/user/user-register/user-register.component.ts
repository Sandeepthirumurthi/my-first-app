import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerationForm = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.email),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: AbstractControl): Validators | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value
      ? null
      : { notMatched: true };
  }

  onSubmit() {
    console.log(this.registerationForm);
  }
}
