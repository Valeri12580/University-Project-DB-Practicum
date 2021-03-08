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

  saveProfession(name: string): Observable<any> {
    return this.httpClient.post(`${ProfessionService.PROFESSION_API}/add`, name);

  }

  deleteById(id: string): Observable<any> {
    return this.httpClient.delete(`${ProfessionService.PROFESSION_API}/${id}/delete`);
  }
}
