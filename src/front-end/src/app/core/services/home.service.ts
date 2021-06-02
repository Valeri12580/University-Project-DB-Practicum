import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConstants} from '../../AppConstants';
import {Observable} from 'rxjs';
import {IWorker} from '../../worker/IWorker';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public static HOME_ENDPOINT = `${AppConstants.API_ENDPOINT}/`;

  constructor(private httpClient: HttpClient) {
  }

  searchByCriteria(professionCriteria: string, cityCriteria: string): Observable<IWorker[]> {
    return this.httpClient.get<IWorker[]>(HomeService.HOME_ENDPOINT, {
      params: {
        professionCriteria: professionCriteria,
        cityCriteria: cityCriteria

      }
    });
  }


}
