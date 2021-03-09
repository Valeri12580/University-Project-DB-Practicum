import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from '../core/services/country.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AddCountry} from './AddCountry';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  @Input()
  public entity = new AddCountry();

  constructor(public countryService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let response = new Observable();
    if (this.entity.id) {
      response = this.countryService.updateCountry(this.entity);
    } else {
      response = this.countryService.saveCountry(this.entity);
    }

    response.subscribe(e => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/countries']);
      });

    });
  }


}
