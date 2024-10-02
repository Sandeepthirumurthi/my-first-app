import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { IProperty } from '../property-list/IProperty.interface';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    ButtonsModule,
    PropertyCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css',
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;

  @ViewChild('formTabs', { static: true }) formTabs!: TabsetComponent;

  // addPropertyForm!: FormGroup;

  // will come from master
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Duplex'];

  propertyView: IProperty = {
    id: 0,
    sellRent: 0,
    name: '',
    pType: '',
    fType: '',
    price: 0,
    BHK: 0,
    builtArea: 0,
    city: '',
    RTM: 0,
  };

  constructor(private route: Router, private fd: FormBuilder) {}

  ngOnInit(): void {
    // this.createAddPropertyForm();
  }

  // createAddPropertyForm() {
  //   this.addPropertyForm = this.fd.group({
  //     sellRent: [null, Validators.required],
  //     pType: [null, Validators.required],
  //     name: [null, Validators.required],
  //     price: [null, Validators.required],
  //     builtArea: [null, Validators.required],
  //   });
  // }

  onBack() {
    this.route.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form submitted');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
