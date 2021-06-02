import {HomeService} from './home.service';
import {IWorker} from '../../worker/IWorker';
import {of} from 'rxjs';

describe('HomeService', () => {
  let service: HomeService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search by criteria', () => {
    const worker: IWorker = {
      id: 'dsad21312',
      age: 15,
      cityName: 'Plovdiv',
      firstName: 'Valeri',
      lastName: 'Stoqnov',
      phoneNumber: '0877160819',
      professionName: 'WC Cleaner'
    };
    const workers = new Array(worker);
    httpClientSpy.get.and.returnValue(of(workers));
    service.searchByCriteria('WC Cleaner', 'Plovdiv')
      .subscribe(w => expect(w).toEqual(workers));
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
