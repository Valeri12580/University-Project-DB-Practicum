import {WorkerService} from './worker.service';
import {IWorker} from '../../worker/IWorker';
import {of} from 'rxjs';
import {IWorkerAdd} from '../../worker-form/IWorkerAdd';

describe('WorkerService', () => {
  let service: WorkerService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
    service = new WorkerService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all workers', () => {
    const workers: IWorker[] = [{
      professionName: 'WC Cleaner',
      phoneNumber: '087716033',
      age: 15,
      cityName: 'Plovdiv',
      lastName: 'Stoyanov',
      firstName: 'Valeri',
      id: 'dsadsa2131'
    }];
    httpClientSpy.get.and.returnValue(of(workers));
    service.getAllWorkers().subscribe(w => expect(w).toEqual(workers));
  });
  it('should save worker', () => {
    const worker: IWorkerAdd = {
      profession: 'WC Cleaner',
      phoneNumber: '087716033',
      age: 15,
      city: 'Plovdiv',
      lastName: 'Stoyanov',
      firstName: 'Valeri'
    };
    httpClientSpy.post.and.returnValue(of());
    service.saveWorker(worker).subscribe();
    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should delete worker by Id', () => {
    const id = '21esadsad';
    httpClientSpy.delete.and.returnValue(of());
    service.deleteById(id).subscribe();
    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });
});
