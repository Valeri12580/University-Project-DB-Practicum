import {CityService} from './city.service';
import {ICity} from '../../city/ICity';
import {of} from 'rxjs';

describe('CityService', () => {
  let service: CityService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
    service = new CityService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cities', () => {
    const cities: ICity[] = [
      {name: 'Plovdiv', countryName: 'Bulgaria'},
      {name: 'Klisura', countryName: 'Bulgaria'}
    ];
    httpClientSpy.get.and.returnValue(of(cities));
    service.getAllCities().subscribe(cities => expect(cities).toEqual(cities));
  });

  it('should save city', () => {
    service.saveCity('test', 'Bulgaria');
    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it('should delete city', () => {
    service.deleteById("dsada19dsa1sd");
    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });
});
