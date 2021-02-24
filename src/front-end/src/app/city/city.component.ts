import {Component, OnInit} from '@angular/core';
import {CityService} from '../core/services/city.service';
import {ICity} from './ICity';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  public cities: ICity[] = [];

  public tableFields: string[] = ['Име на града', 'Страна'];

  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(e => {

      this.cities = e;


    });

  }

}
