import {Component, OnInit} from '@angular/core';
import {ICountry} from './ICountry';
import {CountryService} from '../core/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public tableType: string = 'страни';
  public tableFields: string[] = ['Име на страната'];
  public countries: ICountry[] = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(e => {
      this.countries = e;
    });
  }

  onSubmit(): void {
    console.log('test');
  }

}
