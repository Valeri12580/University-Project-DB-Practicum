import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityComponent} from './city.component';
import {Observable, of} from 'rxjs';
import {ICity} from './ICity';
import {CityService} from '../core/services/city.service';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
      providers: [
        {provide: CityService, useClass: CityServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty city collection on creation', () => {
    expect(component.cities).toBeDefined();
    expect(component.cities.length).toBe(0);
  });

  it('should have countries after onInit()', () => {
    expect(component.cities).toBeDefined();
    expect(component.cities.length).toBe(0);
    component.ngOnInit();
    expect(component.cities.length).toBe(1);
  });
});
