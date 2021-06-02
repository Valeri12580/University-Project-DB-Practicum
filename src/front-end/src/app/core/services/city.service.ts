import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICity} from '../../city/ICity';
import {AppConstants} from '../../AppConstants';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  public static CITY_ENDPOINT = `${AppConstants.API_ENDPOINT}/cities`;


  constructor(private httpClient: HttpClient) {
  }


  getAllCities(): Observable<ICity[]> {
    return this.httpClient.get<ICity[]>(CityService.CITY_ENDPOINT);
  }

  saveCity(cityName: string, countryName: string): Observable<any> {
    return this.httpClient.post(`${CityService.CITY_ENDPOINT}/add`, {
      cityName,
      countryName
    });
  }

  deleteById(id: string): Observable<any> {
    return this.httpClient.delete(`${CityService.CITY_ENDPOINT}/${id}/delete`);
  }
}
