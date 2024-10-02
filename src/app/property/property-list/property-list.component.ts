import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';

import { ActivatedRoute } from '@angular/router';
import { IProperty } from './IProperty.interface';


@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
})
export class PropertyListComponent implements OnInit {
  Properties: IProperty[] = [];

  sellRent = 1;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperites(this.sellRent).subscribe(
      (data: IProperty[]) => {
        this.Properties = data;
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
