import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  ],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css',
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;

  @ViewChild('formTabs', { static: true }) formTabs!: TabsetComponent;

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
    RTM: 0
  };

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.route.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
