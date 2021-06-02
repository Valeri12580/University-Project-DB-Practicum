import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountryComponent} from './country.component';
import {Observable, of} from 'rxjs';
import {ICountry} from './ICountry';
import {CountryService} from '../core/services/country.service';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddCountry} from '../country-form/AddCountry';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  @Component({
    selector: 'app-country-form',
    template: '',
  })
  class CountryFormComponentMock {
    @Input()
    public entity = new AddCountry();
  }

  @Component({
    selector: 'app-data-table',
    template: '',
  })
  class AppDataTableMock {
    @Output()
    public countryEntityEmitter = new EventEmitter<AddCountry>();

    @Input()
    public tableType: string = '';

    @Input()
    public tableFields: string[] = [];

    @Input()
    public data: any[] = [];
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
      declarations: [CountryComponent, CountryFormComponentMock, AppDataTableMock]
      ,
      providers: [
        {
          provide: CountryService,
          useClass: CountryServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty countries array when component is created', () => {
    expect(component.countries).toBeDefined();
    expect(component.countries.length).toEqual(0);
  });
  it('should have 2 countries array when component\'s  onInit is invoked', () => {
    component.ngOnInit();
    expect(component.countries).toBeDefined();
    expect(component.countries.length).toEqual(2);
  });
});
