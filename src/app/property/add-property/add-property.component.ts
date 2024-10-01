import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css',
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.route.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    console.log(this.addPropertyForm);
  }
}
