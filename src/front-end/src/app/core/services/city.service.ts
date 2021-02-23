import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICity} from "../../city/ICity";
import {AppConstants} from "../../AppConstants";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  public static CITY_ENDPOINT=`${AppConstants.API_ENDPOINT}/cities`

  constructor(private httpClient:HttpClient) { }


   getAllCities():Observable<ICity[]>{
    let observable = this.httpClient.get<ICity[]>(CityService.CITY_ENDPOINT);
    return observable
  }
}
