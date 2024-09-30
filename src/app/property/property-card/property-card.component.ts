import { Component, Input, input } from '@angular/core';
import { PropertyListComponent } from '../property-list/property-list.component';
import { IProperty } from '../property-list/IProperty.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  @Input()
  Input_Property!: IProperty;
}
