import {Component, OnInit} from '@angular/core';
import {CountryService} from '../core/services/country.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {
  public name = '';

  constructor(public countryService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.countryService.saveCountry(this.name).subscribe(e => {

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/countries']);
      });
    });

  }

}
