import { Component, Input } from '@angular/core';
import { IProperty } from '../property-list/IProperty.interface';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  @Input()
  Input_Property!: IProperty;
}
