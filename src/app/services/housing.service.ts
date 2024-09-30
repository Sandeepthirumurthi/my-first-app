import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/property-list/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperites(sellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: IProperty[] = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id as keyof object]['sellRent'] === sellRent){
            propertiesArray.push(data[id as keyof object]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
