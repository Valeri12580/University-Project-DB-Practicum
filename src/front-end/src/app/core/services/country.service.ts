import {Injectable} from '@angular/core';
import {AppConstants} from '../../AppConstants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICountry} from '../../country/ICountry';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public static COUNTRY_API = `${AppConstants.API_ENDPOINT}/countries`;

  constructor(private httpClient: HttpClient) {
  }

  getAllCountries(): Observable<ICountry[]> {

    return this.httpClient.get<ICountry[]>(CountryService.COUNTRY_API);

  }

  saveCountry(name: string): Observable<any> {

    return this.httpClient.post(`${CountryService.COUNTRY_API}/add`, name);

  }

  deleteById(id: string): Observable<any> {
    return this.httpClient.delete(`${CountryService.COUNTRY_API}/${id}/delete`);
  }
}
