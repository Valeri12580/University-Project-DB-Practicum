import {Component, OnInit} from '@angular/core';
import {ICountry} from './ICountry';
import {CountryService} from '../core/services/country.service';
import {AddCountry} from '../country-form/AddCountry';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public tableType: string = 'страни';
  public tableFields: string[] = ['Име на страната'];
  public countries: ICountry[] = [];

  public formEntity: AddCountry = new AddCountry();

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(e => {
      this.countries = e;
    });
  }

  handleEventEmitter(entity: AddCountry): void {
   this.formEntity=entity;

  }

}
