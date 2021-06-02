import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataTableComponent} from './data-table.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ICountry} from '../../country/ICountry';
import {Observable, of} from 'rxjs';
import {ICity} from '../../city/ICity';
import {IProfession} from '../../profession/IProfession';
import {IWorker} from '../../worker/IWorker';
import {WorkerService} from '../../core/services/worker.service';
import {CountryService} from '../../core/services/country.service';
import {CityService} from '../../core/services/city.service';
import {ProfessionService} from '../../core/services/profession.service';
import {ActivatedRoute, Router} from '@angular/router';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  class WorkerServiceMock {
    private workers: IWorker[] = [
      {
        id: 'dsadadsadsd',
        firstName: 'Valeri',
        lastName: 'Stoyanov',
        age: 15,
        cityName: 'Plovdiv',
        phoneNumber: '0877160332',
        professionName: 'Programmer'
      }
    ];

    getAllWorkers(): Observable<IWorker[]> {
      return of(this.workers);
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

    deleteById(id: string): Observable<any> {
      return of(id);
    }
  }

  class CityServiceMock {
    private cities: ICity[] = [
      {
        name: 'Plovdiv',
        countryName: 'Bulgaria'
      }
    ];

    getAllCities(): Observable<ICity[]> {
      return of(this.cities);
    }
  }

  class ProfessionServiceMock {
    private professions: IProfession[] = [{
      name: 'WC Cleaner',
    },
      {
        name: 'Kravar'
      }
    ];

    getAllProfessions(): Observable<IProfession  []> {
      return of(this.professions);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: WorkerService,
          useClass: WorkerServiceMock
        },
        {
          provide: CountryService,
          useClass: CountryServiceMock
        },
        {
          provide: CityService,
          useClass: CityServiceMock
        },
        {
          provide: ProfessionService,
          useClass: CityServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    component.data = [{
      name: 'Bulgaria',
    },
      {
        name: 'USA'
      }
    ];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have empty data array when component is created', () => {
    component.data = [];
    expect(component.data).toBeDefined();
    expect(component.data.length).toEqual(0);
  });
  it('should have loaded data array when component\'s  onInit is invoked', () => {
    expect(component.data).toBeDefined();
    component.ngOnInit();
    expect(component.data.length).toEqual(2);
    expect(component.objectKeys.length).toEqual(0);
  });

  it('delete row should delete', () => {
    const router = TestBed.inject(Router);
    const activateRoute = TestBed.inject(ActivatedRoute);
    const activateRouteSpy = spyOn(activateRoute.snapshot.url, 'toString').and.returnValue('countries');
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    component.deleteRow('dsadsa21');
    expect(spy.calls.count()).toEqual(1);
  });

  it('update row should update', () => {
    const spyEmitter = spyOn(component.countryEntityEmitter, 'emit');
    component.updateRow(0);
    expect(spyEmitter.calls.count()).toEqual(1);
  });
});
