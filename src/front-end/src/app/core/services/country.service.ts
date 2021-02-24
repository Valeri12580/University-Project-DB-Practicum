import {Injectable} from '@angular/core';
import {AppConstants} from '../../AppConstants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICountry} from '../../country/ICountry';

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
}
