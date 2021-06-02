import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../../AppConstants';
import {Observable} from 'rxjs';
import {IWorker} from '../../worker/IWorker';
import {IWorkerAdd} from '../../worker-form/IWorkerAdd';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  public static WORKER_API = `${AppConstants.API_ENDPOINT}/workers`;

  constructor(private  httpClient: HttpClient) {
  }

  getAllWorkers(): Observable<IWorker[]> {
    return this.httpClient.get<IWorker[]>(WorkerService.WORKER_API);
  }

  saveWorker(worker: IWorkerAdd): Observable<any> {
    return this.httpClient.post(`${WorkerService.WORKER_API}/add`, worker);

  }

  deleteById(id: string): Observable<any> {
    return this.httpClient.delete(`${WorkerService.WORKER_API}/${id}/delete`);
  }
}
