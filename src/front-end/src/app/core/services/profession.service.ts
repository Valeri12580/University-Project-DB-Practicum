import {Injectable} from '@angular/core';
import {AppConstants} from '../../AppConstants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfession} from '../../profession/IProfession';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  public static PROFESSION_API = `${AppConstants.API_ENDPOINT}/professions`;


  constructor(private httpClient: HttpClient) {

  }

  getAllProfessions(): Observable<IProfession[]> {
    return this.httpClient.get<IProfession[]>(ProfessionService.PROFESSION_API);
  }
}
