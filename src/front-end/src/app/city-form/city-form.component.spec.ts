import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityFormComponent} from './city-form.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CityService} from '../core/services/city.service';
import {CountryService} from '../core/services/country.service';
import {FormsModule} from '@angular/forms';
import {ICountry} from '../country/ICountry';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

describe('CityFormComponent', () => {
  let component: CityFormComponent;
  let fixture: ComponentFixture<CityFormComponent>;

  class CityServiceMock {
    saveCity(cityName: string, countryName: string): Observable<any> {
      return of(cityName);
    }
  }

  class CountryServiceMock {
    private countries: ICountry[] = [{
      name: 'Bulgaria',
    },
      {
        name: 'USA'
      }
    ];

    getAllCountries(): Observable<ICountry  []> {
      return of(this.countries);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityFormComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: CityService,
          useClass: CityServiceMock
        },
        {
          provide: CountryService,
          useClass: CountryServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty country collection on creation', () => {
    expect(component.countries).toBeDefined();
    expect(component.countries.length).toBe(0);
  });

  it('should have countries after onInit()', () => {
    expect(component.countries).toBeDefined();
    expect(component.countries.length).toBe(0);
    component.ngOnInit();
    expect(component.countries.length).toBe(2);
  });

  it('should save city on submit', () => {
    const router = TestBed.inject(Router);
    component.ngOnInit();
    const spy = spyOn(router, 'navigateByUrl');
    component.onSubmit();
    expect(spy.calls.count()).toEqual(1);
  });
});
