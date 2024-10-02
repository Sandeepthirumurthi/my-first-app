import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProperty } from '../property-list/IProperty.interface';


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

  @Input() hideIcons!: boolean;
}
