import {Component, OnInit} from '@angular/core';
import {CityService} from '../core/services/city.service';
import {CountryService} from '../core/services/country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {
  public cityName: string = '';
  public countryName: string = '';
  public countries: string[] = [];

  constructor(private cityService: CityService, private countryService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(e => {
      this.countries = e.map(c => c.name);
    });
  }

  onSubmit(): void {
    this.cityService.saveCity(this.cityName, this.countryName).subscribe(e => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/cities']);
      });
    });

  }

}
