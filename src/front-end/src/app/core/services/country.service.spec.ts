import {CountryService} from './country.service';
import {ICountry} from '../../country/ICountry';
import {AddCountry} from '../../country-form/AddCountry';
import {Observable, of} from 'rxjs';

describe('CountryService', () => {
  let service: CountryService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new CountryService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return countries', () => {
    const countries: ICountry[] = [{name: 'Bulgaria'}, {name: 'USA'}];
    httpClientSpy.get.and.returnValue(of(countries));
    service.getAllCountries().subscribe(c => expect(c).toEqual(c));

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should save country', () => {
    const country = new AddCountry();
    country.id = '5sdada';
    country.name = 'Bulgaria';
    service.saveCountry(country);
    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it('should update country', () => {
    const country = new AddCountry();
    country.id = '5sdada';
    country.name = 'Bulgaria';
    service.updateCountry(country);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it('should delete country', () => {
    const country = new AddCountry();
    country.id = '5sdada';
    country.name = 'Bulgaria';
    service.deleteById(country.id);
    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });

});
